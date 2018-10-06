import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Alert } from 'react-native';



export default class Details extends React.Component {
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
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Write message to Abu Zidan!</Text>

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
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={{ fontSize: 12, }}> Send message!</Text>
          </TouchableHighlight>
        </View>

      </View>




    </Modal>
       
        <Image
          style={{
            height: 150,
            width: 350,
          }}
          source={require('../assets/oceansbook.jpg')}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>The light between oceans</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 300, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Plot: </Text>
          <Text style={{ fontSize: 12, }}>Tom Sherbourne, a traumatised and withdrawn hero of World War I, is hired as a lightkeeper at Janus Rock, a lighthouse off the
        coast of Western Australia. He falls in love with
        a local girl, Isabel Graysmark, and they marry in
        1921. Isabel loses two pregnancies in three
       years and fears she may never become a mother
.</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', width: 320, marginTop: 20 }}>
          <Text style={{
            fontSize: 12,
            color: "#DADADA", textAlign: "left"
          }}>Owners: </Text>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={{ fontSize: 12, }}> Abu Zidan,</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={{ fontSize: 12, }}> Nuraly Akmaral</Text>
          </TouchableHighlight>
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
              this.props.navigation.navigate("collection");
            }}>
            <Text style={{ fontSize: 12, }}> Add to my collection
  </Text>
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
    alignItems: "center",
  },
});
