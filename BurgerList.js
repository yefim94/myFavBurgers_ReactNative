import React, { useState } from 'react'
import { Image, ScrollView, Text, StyleSheet, SafeAreaView, View, Button } from 'react-native';
import BurgerItem from './BurgerItem'

export default  BurgerList = () => {
  return (
   <View style={{
     flexWrap: 'wrap',
     flexDirection: 'row' 
   }}>
      <BurgerItem 
      imageURL='https://www.qualityassurancemag.com/fileuploads/publications/29/issues/103585/articles/images/Impossible_Burger_fmt.png' 
      text1='Normal Burger' 
      text2='Onions with some chease and meat' 
      text3='14.99$' />
       <BurgerItem 
      imageURL='https://i.pinimg.com/originals/4b/46/b3/4b46b30126e764fe49f8f7ae7a9c2b58.png' 
      text1='Chicken Burger' 
      text2='chicken with some chease and cheeze' 
      text3='15$' />
       <BurgerItem 
      imageURL='https://images.ctfassets.net/oewsurrg31ok/zaHuy42aXbG4lczUxB1Es/667e2127ef41a8a84d48679d8f28fe78/2020_Burger_Veggie.png?w=1240&q=55' 
      text1='Veggie Burger' 
      text2='Onions with some Veggies and meat' 
      text3='10.99$' />
       <BurgerItem 
      imageURL='https://www.popeyes.co.za/images/1562706830cheesyjalepeno.png' 
      text1='Cheezy Burger' 
      text2='Onions with some chease and only cheese' 
      text3='14.99$' />
   </View>
  )
}