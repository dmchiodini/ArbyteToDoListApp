import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import action from '../action/action';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

function TarefasScreen({navigation, dispatch, userData}) {

  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then((data_user) => {        
        if (data_user == null) {
          navigation.navigate('Login')
        } else {
          const user = JSON.parse(data_user)
          console.log('JSONparse', user)
          dispatch(action(user))          
        }       
      })
      .catch((err) => {
        console.log('erro: ', err)
      })
  }, [])  
  
  console.log('store: ', userData)

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Olá, {userData}!</Text>
        <Text style={styles.h2}>Aqui estão suas tarefas:</Text>
        <TextInput style={styles.input} placeholder="O que você tem para fazer?" />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }


const mapStateToProps = (store) => {
  return ({
    userData: store.userData
  });
}

export default connect(mapStateToProps)(TarefasScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    width: 400,
    height: 50,
    fontSize: 18,
    backgroundColor: '#CCCCCC',
    marginBottom: 50,
    marginTop: 10,
    borderRadius: 5,
  },
  h1: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#696969',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  textoBotao: {
    fontSize: 18,
    color: '#FFFFFF',
  }
});