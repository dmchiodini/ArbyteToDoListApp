import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Button, CheckBox, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default (props) => {

    Icon.loadFont();

    return(
    <View style={styles.container}>
        <TextInput style={styles.input} 
            placeholder="O que você tem para fazer?" 
            value={props.tarefa}
            onChangeText={v=>props.setTarefa(v)}
        />
        <TouchableOpacity style={styles.icon} onPress={props.addTarefa}>
            <Icon name="add-circle-outline" size={44} color="#414b6e" />
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        marginBottom: 50,
        marginTop: 10,
        marginRight: 5
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 18,
        color: '#414b6e',
        backgroundColor: '#FFF',   
        marginLeft: 3     
      },
      icon: {
        height: 50,
        paddingTop: 2,
        paddingRight: 3,
        backgroundColor: '#FFF'
      }
})