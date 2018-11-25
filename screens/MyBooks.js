import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Alert,ListView } from 'react-native';
import {firebaseApp} from "../api/firebase";
import * as firebase from "firebase";
import {db} from '../api/firebase';


export default class MyBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books:new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('users');
  }

  getRef() {
    return firebaseApp.database().ref();
  }
  componentDidMount(){
    const books='books';

    const user = firebase.auth().currentUser;
    const usersRef = db.ref('users');
    const userRef = usersRef.child(user.uid);
    const booksRef=userRef.child(books)
    booksRef.on('value', (snap) => {  
      var items = [];
      snap.forEach((child) => {
        
        items.push({
          bookname: child.val().bookname,
          _key: child.key
        });
      });

      this.setState({
        books: this.state.books.cloneWithRows(items)
      });

    })
  }

  _renderItem(item) {  
    const books='books'; 
    const user = firebase.auth().currentUser;
    const onPress = () => {
      Alert.alert(
      'Book name',
       item.bookname,
      [
       { text: 'Remove book', onPress: (text) => this.itemsRef.child(user.uid).child(books).child(item._key).remove() },
      { text: 'No', onPress: (text) => console.log("OK") }
       ]
      );
      }; 

    return (
      <View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 20 }}>
          
          <Text style={{
            fontStyle:'italic',fontSize: 20, color:'#0B3A37' 
          }}>Book name: {item.bookname}  </Text>
          <View style={{ justifyContent: "flex-end" }}>
            <TouchableHighlight
              onPress={() => {
                onPress();
              }}>

              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../assets/delete.png')}
              />
            </TouchableHighlight>
          </View>


        </View>
          );
        };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 30,color:"#0B3A37" }}>MY BOOKS COLLECTION</Text>
        <ListView
          dataSource={this.state.books}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
       
       
      />

        
        
          </View>


        );
      }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
});
