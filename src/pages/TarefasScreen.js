import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import action from '../action/action';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, ScrollView, CheckBox } from 'react-native';
import buscarTarefas from '../API/GetTasks';
import adicionarTarefa from '../API/AddTask';
import completarTarefa from '../API/CompletedTask';
import editarTarefa from '../API/editTask'
import AddTaskArea from '../componentes/AddTaskArea';
import Icon from 'react-native-vector-icons/MaterialIcons';
import deletarTarefa from '../API/DeleteTask';
import TaskArea from '../componentes/TaskArea';



function TarefasScreen({navigation, dispatch, userData}) {
  const [ tarefa, setTarefa ] = useState('');
  const [ allTarefas, setAllTarefas ] = useState([]);
  const [ status, setStatus ] = useState(false);

  Icon.loadFont();  

  useEffect(() => {
    AsyncStorage.getItem('data_user')
      .then((data_user) => {        
        if (data_user == null) {
          navigation.push('Login')
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
    .catch((rtt)=>{
      console.log('erro: ', err)
    })
  }, [deletar, addTarefa, editar, toggleStatus])

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
      .catch((err)=>{
        console.log('Erro: ', err)
      })
  }

  function editar(task, id){
    editarTarefa(userData.token, task, id)
      .then(()=>{})
      .catch((err)=>{
        console.log('Erro: ',err)
      })
  }

  function deletar(id) {
    deletarTarefa(userData.token, id)
      .then(()=>{})
      .catch((err)=>{
        console.log('Erro: ', err)
      })
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
            {allTarefas.sort((a, b)=>a.completed - b.completed).map((task) => {
              return(             
                <TaskArea                   
                  toggleStatus={toggleStatus} 
                  deletar={deletar}                  
                  editar={editar}
                  tarefa={task.description}
                  id={task.id}
                  completed={task.completed}
                />
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
    marginBottom: 20    
  },
  h1: {
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