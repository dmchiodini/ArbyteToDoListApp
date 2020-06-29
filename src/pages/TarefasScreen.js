import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import action from '../action/action';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, ScrollView, CheckBox } from 'react-native';
import buscarTarefas from '../API/GetTasks';
import adicionarTarefa from '../API/AddTask';
import completarTarefa from '../API/CompletedTask';
import AddTaskArea from '../componentes/AddTaskArea';
import Icon from 'react-native-vector-icons/MaterialIcons';
import deletarTarefa from '../API/DeleteTask';


function TarefasScreen({navigation, dispatch, userData}) {
  const [ tarefa, setTarefa ] = useState('');
  const [ allTarefas, setAllTarefas ] = useState([]);
  const [ status, setStatus ] = useState(false);

  Icon.loadFont();  

  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then((data_user) => {        
        if (data_user == null) {
          navigation.navigate('Login')
        } else {
          const user = JSON.parse(data_user)
          dispatch(action(user))        
        }       
      })
      .catch((err) => {
        console.log('erro: ', err)
      })
  }, [])

  useEffect(()=>{
    buscarTarefas(userData.token)
    .then(resp => {
      setAllTarefas(resp)
    })
  }, [deletar, addTarefa])

function addTarefa() {
  if(tarefa.trim() != ''){
    adicionarTarefa(tarefa, status, userData.token)
      .then(resp => {
          setTarefa('');
      })
      .catch(erro => {
        alert("Não foi possível adicionar a tarefa!")
      })
  }
}

function toggleStatus(status, id){
  completarTarefa(userData.token, !status, id)
    .then(()=>{})
}

function deletar(id) {
  deletarTarefa(userData.token, id)
    .then(()=>{}) 
}

  const sair = async () => {
    try {
      await AsyncStorage.removeItem('data_user');
      navigation.push('Login')
    }
    catch(err) {
        return console.log(err);
    }
  }

    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.viewCenter}>
            <Text style={styles.h1}>Olá, {userData.user.fullName}!</Text>
            <Text style={styles.h2}>Aqui estão suas tarefas:</Text>
          </View> 

          <AddTaskArea tarefa={tarefa} setTarefa={setTarefa} addTarefa={addTarefa}/>
        
          <ScrollView style={styles.scroll}>          
            {allTarefas.map((task) => {
              return(       
              <View style={styles.itemLista} activeOpacity={0.3} key={task.id}>     
                <CheckBox value={task.completed} onChange={()=>toggleStatus(task.completed, task.id)} />
                <Text style={styles.textoLista}>{task.description}</Text>
                <TouchableOpacity onPress={()=>{deletar(task.id)}}>
                  <Icon name="delete" size={30} color="#696969" />
                </TouchableOpacity>
              </View>
              )            
            })}
          </ScrollView>       

          <View style={styles.viewCenter}>
            <TouchableOpacity style={styles.botao} onPress={sair}>
              <Text style={styles.textoBotao}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    flexDirection: 'row',
    backgroundColor: '#d7dcf9'
  },
  view: {
    flex:1,
    flexDirection: 'column',
    padding: 30
  },
  viewCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 28
  },
  h1: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#414b6e'
  },
  h2: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#414b6e'
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#414b6e',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,    
  },
  textoBotao: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  areaLista: {
    flex:1,  
  },
  itemLista: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  textoLista: {
    flex: 1,
    fontSize: 16,
    color: '#414b6e'
  },
  scroll: {
    flex: 1,
    padding: 5,
  }
});