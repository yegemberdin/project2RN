import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  Touchableopacity,
  AsyncStorage
  
} from "react-native";
import {Button} from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {firebaseApp} from "../api/firebase";
import * as firebase from "firebase";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

const myProps = Platform.select({
  android: {
    extraScrollHeight: 50,
    enableOnAndroid: true,
    keyboardShouldPersistTaps: "handled"
  },
  ios: {}
});


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "", loading: false };
  }
 

  onLoginPress() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        this.setState({ error: "", loading: false });
        AsyncStorage.setItem('userData', JSON.stringify(userData))
        this.props.navigation.navigate("main");
      })
      .catch(() => {
        this.setState({ error: "fghjk", loading: false });
      });
  }

  onSignUpPress() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: "", loading: false });
        this.props.navigation.navigate("main");
      })
      .catch(() => {
        this.setState({ error: "fghjk", loading: false });
      });
  }

  renderButtonOrLoading() {
    return (
      <View style={styles.buttonView}>
        <Button onPress={this.onLoginPress.bind(this)}>
          <Text style={styles.buttonText}>L o g i n</Text>
        </Button>
        <Button onPress={this.onSignUpPress.bind(this)}>
          <Text style={styles.buttonText}>S i g n U p</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{
          height:150,
          width: 345, marginTop:50}}
          source={require('../assets/bookshare.jpg')}
        />
     
      <KeyboardAwareScrollView {...myProps}>         
        
          <View style={styles.second}>
         
          <Text style={{fontSize: 18, fontWeight: "bold",marginLeft:10,marginBottom:20, color:"#0B3A37"}}> F I N D, S H A R E and R E A D!</Text>
            <TextInput
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
            >
              
            </TextInput>

            <TextInput
              secureTextEntry={true}
              style={styles.input1}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
            />
          </View>
          </KeyboardAwareScrollView>
          

        {this.renderButtonOrLoading()}
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FBFF",
  },
  second: {
    marginTop: 100,
    marginBottom: 0
  },
  buttonView: {
    marginTop: 0,
    marginBottom: 100,
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "200",
    color:"black",

    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    padding: 4,
    fontSize: 10,

    borderWidth: 0.5,
    color: "#3a3a3a",
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 10,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "flex-end",

    width: 250
  },
  input1: {
    height: 40,
    padding: 4,
    fontSize: 10,
    borderColor: "#3a3a3a",
    borderWidth: 0.5,
    color: "#3a3a3a",
    marginBottom: 10,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "200",
    marginTop: 0,

    alignSelf: "flex-end",

    width: 250
  }
});
