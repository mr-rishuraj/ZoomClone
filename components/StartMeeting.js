import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const StartMeeting = ({ name, roomId, setRoomId, setName, joinRoom }) => {
  return (
    <View style = {styles.startMeetingContainer}>
            <View style = {styles.info}>
                <TextInput 
                    style = {styles.textInput}
                    value = {name}
                    placeholder = 'Enter Name'
                    placeholderTextColor= '#767476'
                    onChangeText = {text => setName(text)}
                />
            </View>
            <View style = {styles.info}>
                <TextInput 
                        style = {styles.textInput}
                        value = {roomId}
                        placeholder = 'Enter Room ID'
                        placeholderTextColor= '#767476'
                        onChangeText = {text => setRoomId(text)}
                    />
            </View>

            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => joinRoom()}
                    style = {styles.startMeetingButton}
                >
                    <Text style = {{color: 'white', fontWeight: 'bold'}}> Start Meeting </Text>
                </TouchableOpacity>
            </View>
        </View> 
  )
}

const styles = StyleSheet.create(
    {
        info: {
            width: '100%',
            backgroundColor: '#373538',
            height: 50,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#484648',
            padding: 12,
            justifyContent: 'center'
        },
        startMeetingContainer: {

        },
        textInput: {
            color: 'white',
            fontSize: 18
        },
        startMeetingButton: {
            width: 350,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0470DC",
            height: 50,
            borderRadius: 15
        }
    }
)

export default StartMeeting