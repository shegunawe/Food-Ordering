import { View, Text, Platform, Modal, Button, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

interface CartScreenProps {
    visible: boolean;
    onClose: () => void;
  }

const CartScreen: React.FC<CartScreenProps> = ({ visible, onClose }) => {
  return (
    <Modal      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello, I'm a modal!</Text>
          <Button title="Close Modal" onPress={onClose} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  

export default CartScreen