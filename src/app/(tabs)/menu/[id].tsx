import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams
  return (
    <View>
      <Text>ProductDetailsScreen</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})