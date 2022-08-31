import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Navigation from '../Navigation';

const items = [
    {
      id: 1,
      name: 'video-camera',
      title: 'Nayi Meet',
      customColor: 'orange'
  },
  {
    id: 2,
    name: 'plus-square',
    title: 'Milan'
  },
  {
    id: 3,
    name: 'calendar',
    title: 'Taarik'
  },
  {
    id: 4,
    name: 'upload',
    title: 'Baato Screen Ko'
  },
]


const MenuButton = ({navigation}) => {

  const openMeeting = ()=> {
    navigation.navigate('Room')
  }
  return (
    <View style = {styles.container}>
      {items.map((item, index) => 
        <View 
          key={index}
          style = {styles.buttonContainer}>
          <TouchableOpacity

            onPress={()=> openMeeting()}
            style = {{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : '#0470DC'
            }}
          >
            <FontAwesome name={item.name} size= {23} color = {"#efefef"} />
          </TouchableOpacity>
          <Text style = {styles.menuText}>{item.title}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: '#1f1f1f',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  menuText:{
    color: '#858585',
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '600',
  },
  button: {
    width: 50,
    height: 50, 
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MenuButton