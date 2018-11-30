import React from 'react';
  
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Alert,FlatList,ListView,TouchableOpacity,Platform,TextInput} from 'react-native';
import {db} from '../api/firebase';
import * as firebase from "firebase";
import { Card } from "react-native-elements";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const myProps = Platform.select({
  android: {
    extraScrollHeight: 50,
    enableOnAndroid: true,
    keyboardShouldPersistTaps: "handled"
  },
  ios: {}
});

export default class Details extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('bookObject',  {title: "undefined"}).title,
    };
};
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      bookName: "Undefined",
      bookDescription: "No description availible.",
      bookUri: "https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg",
      bookAuthor: "Unknown",
      username:'',
      receiver:'',
      message:'',
      date:'',
      phone:'',
      owners:new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }
  componentDidMount(){

    const usersRef = db.ref('users');
    const user = firebase.auth().currentUser;
    const userRef=usersRef.child(user.uid);
    userRef.on('value', (snap) => {      
      snap.forEach((child) => {      
        this.setState({
          username: child.val(),
        });
    
        
      });
    })
    const title = this.props.navigation.getParam('bookObject', {}).title;
    const ownersRef = db.ref('books');
    const ownerRef=ownersRef.child(title);
    ownerRef.on('value', (snap) => {  
      var items = [];
      snap.forEach((child) => {
        
        items.push({
          name: child.val().owner,
          _key: child.key
        });
      });

      this.setState({
        owners: this.state.owners.cloneWithRows(items)
      });

    })
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
     

      <View style={styles.container}>
       <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        this.setModalVisible(false);
      }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Write message to {this.state.receiver}</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 300, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>message: </Text>
          <TextInput style={styles.input}
          onChangeText={message => this.setState({ message })}
          >
          </TextInput>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Date: </Text>
          <TextInput style={styles.input}
          onChangeText={date => this.setState({ date })}
          >
           </TextInput>
        </View>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Phone: </Text>

          <TextInput style={styles.input}
           onChangeText={phone => this.setState({ phone })}
          >
           </TextInput>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", width: 320, marginTop: 70, }}>
          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require('../assets/send.png')}
          />
          <TouchableHighlight
            onPress={() => {
              this.saveMessage();
              this.setModalVisible(!this.state.modalVisible);

            }}>
            <Text style={{ fontSize: 12, }}> Send message!</Text>
          </TouchableHighlight>
        </View>

      </View>
    </Modal>


       <KeyboardAwareScrollView {...myProps}>  
        <Image
          style={{
            height: 200,
            width: 350,
          }}
          source={{uri: this.props.navigation.getParam('bookObject', {}).uri}}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>{this.props.navigation.getParam('bookObject', {}).title}</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 300, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Plot: </Text>
          <Text style={{ fontSize: 12, }}>{this.props.navigation.getParam('bookObject', {}).description}
.</Text>
        </View>
        
        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Owners: </Text>
       
       <ListView
          dataSource={this.state.owners}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
       
       
      />
          
          
        </View>
        
        

        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", width: 320, marginTop: 70, }}>
          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require('../assets/add.jpg')}
          />
          <TouchableHighlight
            onPress={() => {
              this.saveOwnerToBook();
              this.props.navigation.navigate("collection");
            }}>
            <Text style={{ fontSize: 12, }}> Add to my collection
  </Text>
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", width: 320, marginTop: 10, }}>
          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require('../assets/back.png')}
          />
          <TouchableHighlight
            onPress={() => {
              
              this.props.navigation.navigate("main");
            }}>
            <Text style={{ fontSize: 12, }}> Back to menu!
  </Text>
          </TouchableHighlight>
        </View>
        </KeyboardAwareScrollView>

        
      </View>


    );
  }
 

  saveOwnerToBook() {
    const books='books';
    const booksRef = db.ref('books');
    const bookTitle=this.props.navigation.getParam('bookObject', {}).title;
    const bookRef = booksRef.child(bookTitle);
    bookRef.push({
      owner:this.state.username,
    });
    const user = firebase.auth().currentUser;
      const usersRef = db.ref('users');
      const userRef = usersRef.child(user.uid);
      const userBookRef = userRef.child(books);
      userBookRef.push({
        bookname:bookTitle,
      });
    
  }

  saveMessage(){
    const msgsRef=db.ref('messages');
    const bookTitle=this.props.navigation.getParam('bookObject', {}).title;
    const receiverRef=msgsRef.child(this.state.receiver);
    receiverRef.push({
      date:this.state.date,
      message:this.state.message,
      phone:this.state.phone,
      book:bookTitle,
      sender:this.state.username,


    })


  }
  _renderItem(item) {    

    return (
      <TouchableOpacity 
        onPress={()=>{
              this.setState({
                receiver:item.name,                

              } ) ;      
              this.setModalVisible(true);


            }}>
           
              <Text style={{ marginBottom: 10 }}>
                {item.name}
              </Text>
           
            </TouchableOpacity>
          );
        };
     
     
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  input: {
    height: 40,
    fontSize: 12,
    borderWidth: 0.5,
    color: "#3a3a3a",
    fontWeight: "200",
    alignSelf: "flex-end",

    width: 250
  },
});
