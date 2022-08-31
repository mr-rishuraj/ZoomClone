import { View, StyleSheet} from 'react-native'
import React, { useState,  useEffect } from 'react'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'

let socket

const MeetingRoom = () => {

    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()

    const joinRoom = ()=> {
        socket.emit('join-room', {roomId: roomId, userName: name})
    }

    useEffect(()=>{
        socket = io('https://0717-59-95-120-132.in.ngrok.io')
        console.log('YOOOOO')
        socket.on('connection', ()=> console.log('connected'))
    }, [])
  return (
    <View style = {styles.container}>
        <StartMeeting 
            name = {name}
            setName = {setName}
            roomId = {roomId}
            setRoomId = {setRoomId}
            joinRoom = {joinRoom}
        />
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#1c1c1c',
            flex: 1
        },
        
    }
)

export default MeetingRoom