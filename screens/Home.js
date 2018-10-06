import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';

import {SearchBar} from 'react-native-elements';
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51Qs-KEJnFL.jpg",
    title: "The light between oceans"
  },
  {
    imageUrl: "https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg",
    title: "Harry potter"
  },
  {
    imageUrl: "https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg",
    title: "Game of thrones"
  },
  {
    imageUrl: "https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg",
    title: "something three"
  },
  {
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51m7m2YzyYL._SY445_QL70_.jpg",
    title: "something four"
  },
 
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <SearchBar style={{width:"100%",marginTop:50}}
      placeholder='Find book...'
      containerStyle={{backgroundColor: '#E6E6E6'}}
      inputStyle={{backgroundColor: 'white'}}></SearchBar>
       <FlatList
      horizontal
        data={this.state.data}
        renderItem={({ item: data }) => {
          return (
            <TouchableHighlight onPress={() => {
              this.props.navigation.navigate("details");
            }}>
            <Card
              title={null}
              image={{ uri: data.imageUrl}}
              containerStyle={{ padding: 0, width: 160 }}
            >
              <Text style={{ marginBottom: 10 }}>
                {data.title}
              </Text>
            </Card>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item, index) => index}
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
