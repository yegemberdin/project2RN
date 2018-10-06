import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Alert } from 'react-native';



export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
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
      }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Message from Nuray Maratova!</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 300, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>message: </Text>
          <Text style={{ fontSize: 12, }}>Hi! Abu. I want you to share with me book The light betwwen oceans! I have a books like:
          harry potter,game of thrones, stars with us!
          Books are ideal! </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Date: </Text>
          <Text style={{ fontSize: 12, }}> March ,20. 2018  Park of the President, Almaty </Text>

        </View>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Phone: </Text>

          <Text style={{ fontSize: 12, }}> 8700-700-00-00</Text>

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
         <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 30,color:"#0B3A37" }}>Incoming messages...</Text>
<Text style={{marginTop:30, color:"#979797"}}>Nazerke Yegemberdi: </Text>
<View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 10 }}>
<Text style={{
    fontSize: 13, 
  }}>B o o k:  The light between oceans </Text>
  <TouchableHighlight
      onPress={() => {this.setModalVisible(true);}}>
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
<Text style={{marginTop:30, color:"#979797"}}>Nuray Maratova: </Text>
<View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 10 }}>
<Text style={{
    fontSize: 13, 
  }}>B o o k:  Harry potter and the goblet of fire </Text>
  <TouchableHighlight
      onPress={() => {this.setModalVisible(true);}}>
  <Image
    style={{
      height: 20,
      width: 20,
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
