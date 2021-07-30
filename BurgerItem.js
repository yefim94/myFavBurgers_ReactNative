import React from 'react'
import { Image, ScrollView, Text, StyleSheet, SafeAreaView, View, Button} from 'react-native';

const BurgerItem = ({imageURL, text1, text2, text3}) => {
  return (
    <View style={{
      flexDirection: 'column',
      marginTop: 30,
      alignItems: 'left',
    }}>
      <Image  source={{
        uri: imageURL
      }} style={{
        width: 140,
        height: 100,
        marginRight: 40
      }}></Image>
      <Text style={{
        color: '#fff',
        marginTop: 20,
        fontWeight: '600', 
        fontSize: 25
      }}>{text1}</Text>
      <Text style={{
        color: '#fff',
        marginTop: 10,
        fontWeight: '500', 
        fontSize: 20
      }}>{text2}</Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Text style={{
        color: '#fff',
        marginTop: 10,
        fontWeight: '600', 
        fontSize: 15
      }}>{text3}</Text>
      <View style={{marginTop: 10}}>
      <Button 
        title="Add"
      ></Button>
      </View>
      </View>
    </View>
  )
}
export default BurgerItem