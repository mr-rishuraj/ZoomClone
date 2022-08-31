import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButton from '../components/MenuButton'
import Contacts from '../components/Contacts'

const Home = ({ navigation }) => {
  return (
    <View style = {styles.container}>
        <SafeAreaView style = {{ height: '100%'}}>
            {/* header */}
            <Header />
            {/* Searchbar */}
            <SearchBar />
            {/* Menu Buttons */}
            <MenuButton navigation = {navigation}/>
            {/* Contacts Menu */}
            <Contacts />
        </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: '#1c1c1c',
        padding: 15
    }
})
export default Home;