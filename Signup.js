import React, { useState } from 'react';
import { Pressable, Alert, SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export function RegisterUi({navigation}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  const ui = (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input1}
            maxLength={20}
            placeholder="Enter your first name"
            onChangeText={setFirstName} 
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input1}
            maxLength={20}
            placeholder="Enter your last name"
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input1}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Enter your mobile number"
            onChangeText={setMobile}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input1}
            maxLength={20}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>

      </View>

      {/* <Button title='register' onPress={saveUser} style={styles.Text1}>
      </Button> */}
      <Pressable onPress={saveUser}>
        <View style={styles.btn1}> 
          <Text style={styles.Text1}>Register</Text>
        </View>
      </Pressable>

      <Pressable onPress={login}>
        <View style={styles.btn2}>
          <Text style={styles.Text2}>Already I have an account.Go back to Login !</Text>
        </View>
      </Pressable>
      {/* <Button title='Already I have an account.Go back to Login !' onPress={login} style={styles.Text2}>
      </Button>  */}

    </SafeAreaView>
  );

  function login() {
    navigation.navigate("Login");
  }


  function saveUser() {

    var form = new FormData();
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("mobile", mobile);
    form.append("password", password);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var newUserResponseArray = JSON.parse(request.responseText);

        if (newUserResponseArray[0].errorMessage != null) {
          Alert.alert("Message", newUserResponseArray[0].errorMessage);
        } else {
          navigation.navigate("Login");
          Alert.alert("Message", "Sign Up successful");
        }
      }
    };
    request.open("POST", "http://192.168.8.101/MyNote/register.php", );
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
  inputContainer: {
    width: '80%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  dropdown: {
    borderWidth: 1,
    borderRadius: 50,
    width: 330,
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
    fontSize: 14,
    fontWeight: 'bold',
    
  },

  btn2:{
    marginTop:20,
    height:30,
    width:350,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    
  },
  Text1:{
    color:'#008080',
    fontSize:20,
    fontWeight:'bold'
  },

  Text2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: 16,
  },
});
