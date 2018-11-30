import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Alert,ListView } from 'react-native';
import {db} from '../api/firebase';
import * as firebase from "firebase";


export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      messages:new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      username:'',
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
    
    const userr=this.state.username;
        const msgsRef = db.ref('messages');
    const userMsgRef=msgsRef.child('Mila Sadvakassova');
    userMsgRef.on('value', (snap) => {  
      var items = [];
      snap.forEach((child) => {
        
        items.push({
          book: child.val().book,
          date: child.val().date,
          message: child.val().message,
          phone: child.val().phone,
          sender: child.val().sender,
          _key: child.key
        });
      });

      this.setState({
        messages: this.state.messages.cloneWithRows(items)
      });

    })
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={styles.container}>     
         
 <ListView
 dataSource={this.state.messages}
 renderRow={this._renderMsgsList.bind(this)}
 enableEmptySections={true}/>

  </View>
    
    );
  }
  _renderMsgsList(item) {    

    return (
      
      <View>     
           <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 30,color:"#0B3A37" }}>Incoming messages...</Text>
<Text style={{marginTop:30, color:"#979797"}}>{item.sender}</Text>
<View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 10 }}>
<Text style={{
    fontSize: 13, 
  }}>B o o k:  {item.book} </Text>
  <TouchableHighlight
      onPress={() => { this.setModalVisible(true); this.renderMsgModal(item); }}>
  <Image
    style={{
      height: 20,
      width: 30,
    }}
    source={require('../assets/openmsg.png')}
  />
  </TouchableHighlight>
  <TouchableHighlight
      onPress={() => {Alert.alert('Message has been accepted'); }}>
  <Image
    style={{
      height: 20,
      width: 25,
    }}
    source={require('../assets/green.png')}
  />
  </TouchableHighlight>
  <TouchableHighlight
      onPress={() => {Alert.alert('Message has been declined'); }}>
  <Image
    style={{
      height: 20,
      width: 25,
    }}
    source={require('../assets/red.png')}
  />
  </TouchableHighlight>

  


</View>
           
           </View>
          );
        };
  renderMsgModal(item) {  
     
console.log('aa');
          return (
            <View>

               <Modal
      animationType="slide"
      transparent={false}
      visible={true}
            onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        this.setModalVisible(false);
      }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Message from {item.sender}!</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 300, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>message: </Text>
          <Text style={{ fontSize: 12, }}>{item.message} </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Date: </Text>
          <Text style={{ fontSize: 12, }}> {item.date} </Text>

        </View>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Phone: </Text>

          <Text style={{ fontSize: 12, }}> {item.phone}</Text>

        </View>
        <View style={{ flexDirection: "row", alignItems: 'center',justifyContent:"center", width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Accept </Text>

          <TouchableHighlight
      onPress={() => {Alert.alert('Message has been accepted'); this.setModalVisible(!this.state.modalVisible); }}>
  <Image
    style={{
      height: 20,
      width: 50,
    }}
    source={require('../assets/green.png')}
  />
  </TouchableHighlight>

        </View>
        <View style={{ flexDirection: "row", alignItems: 'center',justifyContent:"center", width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Deny </Text>

         <TouchableHighlight
      onPress={() => {Alert.alert('Message has been denied'); this.setModalVisible(!this.state.modalVisible); }}>
  <Image
    style={{
      height: 20,
      width: 50,
    }}
    source={require('../assets/red.png')}
  />
  </TouchableHighlight>

        </View>


       

      </View>




    </Modal>
              </View>

          );
        };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
