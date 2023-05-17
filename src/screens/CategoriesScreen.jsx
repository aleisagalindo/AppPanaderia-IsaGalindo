import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Bread Store! You'll find here the most quality bread of the country.</Text>
      <Button title='Navigate to Bread' onPress={() => navigation.navigate("Bread")}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})