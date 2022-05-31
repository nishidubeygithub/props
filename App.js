import React, { useState } from "react";
import {View, StyleSheet, Text, Button, Modal, Image } from 'react-native';
export default function App() {
const [isVisible, setVisible] = useState(false);
const tempFunction = () => {
  console.log('onShow Called...');
}
const callDismiss_iOS = () => {
console.log('onDismiss called in iOS...');
 
  }
 
  const Modal_Component = () => (
    <View style={{ height: 0 }}>
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={isVisible}
        onDismiss={callDismiss_iOS}
        presentationStyle={"pageSheet"}
        supportedOrientations={['portrait']}
        onShow={tempFunction} 
        onRequestClose={() => {
          console.log("closed.");
        }}>
        <View style={styles.MainContainer}>
          <View style={styles.modalContainer}>

           <Text style={styles.text}> Modal onDismiss in React Native</Text>
            <Button title="Click Here To Hide Modal" onPress={() => setVisible(!isVisible)} />
         </View>
        </View>
      </Modal>
    </View>
  );
 
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
        <Image source={require("./Assets/download.jpeg")} style={styles.image}/>
         <Modal_Component/>
        <Button onPress={() => setVisible(true)} title='Show Modal' />
       </View>
      </View>
  );
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    width: 300,
    height: 240,
    backgroundColor: '#F50057',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    padding: 10
  },
  image:{
    marginTop: 100,
    marginBottom: 10,
    width: '90%',
    height: 200,
  }
 
});