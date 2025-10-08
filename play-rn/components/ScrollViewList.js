import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SingleList as data } from '../constants'

const ScrollViewList = () => {
  return (
    <ScrollView>
      {data.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

export default ScrollViewList