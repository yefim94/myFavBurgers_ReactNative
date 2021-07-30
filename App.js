import React from 'react';
import { Image, ScrollView, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import  BurgerList  from "./BurgerList";

function App() {
  return (
    <SafeAreaView style={styles.bodyCont}>
      <ScrollView style={styles.scrollCont}>
        <Text style={{
          color: '#fff',
          fontSize: 40,
          fontWeight: '600'
        }}>Best Burgers</Text>
        <Text style={{
          color: '#fff',
          fontSize: 29,
          fontWeight: '300'
        }}>App</Text>
        <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{
            backgroundColor: '#EEB421',
            borderRadius: '50%',
            width: 9,
            height: 9,
            marginRight: 10
          }}></View> 
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 25}}>My favorite Burgers</Text>
        </View>
        <BurgerList></BurgerList>
        <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{
            backgroundColor: '#EEB421',
            borderRadius: '50%',
            width: 9,
            height: 9,
            marginRight: 10
          }}></View> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyCont: {
    flex: 1,
    backgroundColor: '#232227',
  },
  scrollCont: {
    padding: 50,
    fontFamily: ''
  }
})

export default App;