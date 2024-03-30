import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export function HomeUi({navigation}) {
  const ui = (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>
            <Text style={styles.text1}>My Notes</Text>
            <Pressable style={styles.out1} onPress={logout} >
                <View>
                    <Text style={styles.text2}>Log Out</Text>
                </View>
            </Pressable>
        </View>
        <View style={styles.notes1}>
            {/* <Text></Text> */}
            <Pressable onPress={hello}>
            <View style={styles.notes2}>
                <Text style={styles.text3}>Chemistry Notes</Text>
                <Text style={styles.text4}>Content hidden...</Text>
            </View>
            </Pressable>
            <View>
            <Pressable   >
                <View>
                <Image
            style={styles.tinyLogo2}
            source={
              require('./images/profile_avatar.png')
            }/>
                </View>
            </Pressable>
            </View>
        </View>
    </SafeAreaView >
    
  );
  

  function logout(){
    navigation.navigate("Login");
  }
  function hello(){
    navigation.navigate("NoteView");
  }

  return ui;

}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    backgroundColor:"gray",
    flexDirection: 'row',
    height:50,
  },
  notes1:{
    flexDirection:'column',
  },
  notes2:{
    height:50,
    marginTop:5,
    borderWidth:1,
    borderRadius:5,
    marginLeft:5,
    marginRight:5,
    justifyContent:'center',
  },
  notes:{

  },
  text1:{
    fontSize:25,
    marginLeft:20,
    marginTop:10,
  },
  text3:{
    fontSize:16,
    marginLeft:7,
  },
  text4:{
    fontSize:12,
    color:'gray',
    marginLeft:7,
  },

  tinyLogo: {
    marginTop:10,
    width: 30,
    height: 30,
  },

  tinyLogo2: {
    marginTop:420,
    marginLeft:300,
    width: 50,
    height: 50,

  },
  out1:{
    marginTop:10,
    height:30,
    width:100,
    borderWidth: 1,
    marginLeft:110,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text2:{
    fontSize: 14,
  }
});
