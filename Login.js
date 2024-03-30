import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


export function LoginUi({navigation}) {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const ui = (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>

      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input1}
            keyboardType="numeric"
            placeholder="Enter your mobile number"
            onChangeText={setMobile} 
            value={mobile}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input1}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            
          />
        </View>
      </View>

      <Pressable onPress={goToDarshBoard}>
        <View style={styles.btn1}>
          <Text style={styles.text1}>Login</Text>
        </View>
      </Pressable>
      <Pressable onPress={saveUser}>
        <View style={styles.btn1}> 
          <Text style={styles.text1}>Register</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );

  function saveUser(){
    navigation.navigate("Signup");
  }

  function goToDarshBoard() {
   
      var form = new FormData();
      form.append("mobile", mobile);
      form.append("password", password);
  
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
          var newUserResponseObject = JSON.parse(request.responseText);
  
          if (newUserResponseObject.errorMessage != "") {
            Alert.alert("Message", newUserResponseObject.errorMessage);
          } else {
            navigation.navigate("Home");
            Alert.alert("Message", "Welcome " + newUserResponseObject.userDetails.fname);
            
          }
        }
      };
      request.open("POST", "http://192.168.8.101/MyNote/login.php", true);
      request.send(form);
    }
    return ui;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%', 
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text1: {
    color:'#008096',
    fontSize:20,
    fontWeight:'bold'
  },
  input1: {
    flex: 1,
    height:30,
    borderWidth: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn1:{
    marginTop:20,
    height:40,
    width:160,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  }
});