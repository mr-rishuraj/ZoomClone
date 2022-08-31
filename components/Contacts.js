import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'react-native';
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const contactMenuButtons = [
  {
    type : 'starred',
    name: 'Starred'
  },
  {
    type : 'contact',
    name : 'Rishu',
    photo: require('../assets/rishu.jpeg')
  },
  {
    type : 'contact',
    name : 'Rishu Raj',
    photo: require('../assets/rishu.jpeg')
  },
  {
    type : 'contact',
    name : 'Rishu Raj Gupta',
    photo: require('../assets/rishu.jpeg')
  },
]

const Contacts = () => {
  return (
    <View style = {styles.container}>
      {/* contact container */}
      {contactMenuButtons.map((contact, index) => 
          <View 
            key={index}
            style = {styles.row}>
            {/* Image */}
            {contact.type == "starred" ? (
              <View style = {styles.starredIcon}>
              <AntDesign name='star' size= {30} color='#efefef' />
              </View> ) : (
                <Image source = {contact.photo} style = {styles.image} /> 
              )
          }
            
            {/* Text */}
            <Text style = {styles.text}>
              {contact.name}
            </Text>
      </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  starredIcon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image : {
    width: 55,
    height: 55,
    borderRadius: 20,
  }
})

export default Contacts