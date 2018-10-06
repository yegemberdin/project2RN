import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Alert } from 'react-native';



export default class MyBooks extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 30,color:"#0B3A37" }}>MY BOOKS COLLECTION</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 20 }}>
          <Image
            style={{
              height: 70,
              width: 70,
            }}
            source={require('../assets/oceansbook.jpg')}
          />
          <Text style={{
            fontSize: 13, 
          }}>The light between oceans </Text>
          <View style={{ justifyContent: "flex-end" }}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("details");
              }}>

              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../assets/next.png')}
              />
            </TouchableHighlight>
          </View>


        </View>
        <View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 20 }}>
          <Image
            style={{
              height: 70,
              width: 70,
            }}
            source={require('../assets/harrybook2.jpeg')}
          />
          <Text style={{
            fontSize: 13, 
          }}>Harry Potter and the goblet of fire </Text>
          <View style={{ justifyContent: "flex-end" }}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("details");
              }}>

              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../assets/next.png')}
              />
            </TouchableHighlight>
          </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 20 }}>
            <Image
              style={{
                height: 70,
                width: 70,
              }}
              source={require('../assets/harrybook.jpeg')}
            />
            <Text style={{
              fontSize: 13,
            }}>Harry Potter and the Philosopher's Stone </Text>
            <View style={{ justifyContent: "flex-end" }}>
              <TouchableHighlight
                onPress={() => {
                  this.props.navigation.navigate("details");
                }}>

                <Image
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  source={require('../assets/next.png')}
                />
              </TouchableHighlight>
            </View>


          </View>
          <View style={{ flexDirection: "row", alignItems: 'center', width: 330, marginTop: 20 }}>
            <Image
              style={{
                height: 70,
                width: 70,
              }}
              source={require('../assets/thronesbook.jpg')}
            />
            <Text style={{
              fontSize: 13, 
            }}>A Game of Thrones </Text>
            
              <TouchableHighlight
                onPress={() => {
                  this.props.navigation.navigate("details");
                }}>

                <Image
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  source={require('../assets/next.png')}
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
    alignItems: "center",
  },
});
