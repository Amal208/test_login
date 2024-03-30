import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export function NoteViewUi({}) {
  const ui = (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image
            style={styles.tinyLogo}
            source={
                require('./images/profile_avatar.png')
            }/>
            <Text style={styles.text1}>My Notes</Text>
            
        </View>

        <View style={styles.notes1}>
            {/* <Text></Text> */}
            <Pressable onPress={GoToView}>
            <View style={styles.notes2}>
                <Text style={styles.text3}>Chemistry Notes</Text>
                <Text style={styles.text4}>Organic chemistry is a branch of chemistry that focuses on the study of carbon-containing compounds. Here's a short note on organic chemistry:

Organic Chemistry:
- Organic chemistry is the branch of chemistry that deals with the structure, properties, reactions, and synthesis of carbon compounds, primarily those involving carbon-hydrogen (C-H) bonds.
- Carbon is unique because of its ability to form long chains and rings, giving rise to a vast diversity of organic compounds. These compounds are the basis of life on Earth and are found in all living organisms.</Text>
            </View>
            </Pressable>
            <View>
            </View>
        </View>
        <View style={styles.view3}>
        <Pressable style={styles.out1} onPress={Save} >
                <View>
                    <Text style={styles.text2}>Save</Text>
                </View>
            </Pressable>
            <Pressable style={styles.out1} onPress={Delete} >
                <View>
                    <Text style={styles.text2}>Delete</Text>
                </View>
            </Pressable>
        </View>
        
    </SafeAreaView >
    
  );
  

  function GoToView(){
    Alert.alert("OK");
  }
  function Save(){
    Alert.alert("OK");
  }
  function Delete(){
    Alert.alert("OK");
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
  view3:{

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
