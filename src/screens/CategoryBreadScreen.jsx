import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Here are the Categories Section. Choose which products you wanna buy! </Text>
      <Button title='Navigate to Detail' onPress={() => navigation.navigate("Detail")}/>
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({})