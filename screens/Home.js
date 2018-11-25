import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';
import {firebaseApp} from '../api/firebase';
import {SearchBar} from 'react-native-elements';
import { Card } from "react-native-elements";
import books from '../screens/books';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchtext:" "
    };
    this.itemsref=this.getRef().child('books');
  }
  firstSearch() {
    this.searchDirectory(this.itemsRef);
  }



searchDirectory(itemsRef) {

var searchText = this.state.searchText.toString();

if (searchText == ""){
  this.listenForItems(itemsRef);
}else{
  itemsRef.orderByChild("searchable").startAt(searchText).endAt(searchText).on('value', (snap) => {

    items = [];
    snap.forEach((child) => {
      items.push({ 
        address: child.val().address,
        firstLetter: child.val().firstLetter,
        title: child.val().title,
      });
    });


    this.setState({
      data: this.state.data.cloneWithRows(items)
    });

  });
}

}

getRef() {
  return firebaseApp.database().ref();
}

listenForItems(itemsRef) {
  //const user = firebase.auth().currentUser;
  //const itemRef=itemsRef.child(user.uid);
  itemsRef.on('value', (snap) => {

    // get children as an array
    var items = [];
    snap.forEach((child) => {
      console.log(snap);
      child.forEach((book) =>{
      items.push({
        title: book.val().bookName,
        imageUrl: book.val().logo,
        _key: book.key
      });
    });
    });
    console.log(items);
    this.setState({
      data:items
    });

  });
}


componentDidMount() {
  //this.listenForItems(this.itemsref);
}

  render() {
    return (
      <View style={styles.container}>
      <SearchBar style={{width:"100%",marginTop:50}}
      placeholder='Find book...'
      containerStyle={{backgroundColor: '#E6E6E6'}}
      inputStyle={{backgroundColor: 'white'}}
      onChangeText={(text) => this.setState({searchText:text})}
      onSubmitEditing={() => this.firstSearch()}>
      </SearchBar>
       <FlatList
      numColumns={2}
        data={books}
        keyExtractor={(item, index) => index}
        renderItem={
          ({item, index}) => {
          return (
            <TouchableHighlight onPress={() => {
              this.props.navigation.navigate(
                'details', 
                {
                  'bookObject': item, 
                }
)
            }}>
            <Card
              title={null}
              image={{ uri: item.uri}}
              containerStyle={{ padding: 0, width: 160 }}
            >
              <Text style={{ marginBottom: 10 }}>
                {item.title}
              </Text>
            </Card>
            </TouchableHighlight>
          );
        }}
      />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

