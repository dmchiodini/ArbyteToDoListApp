import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, CheckBox, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default (props) => {
    const [ edit, setEdit ] = useState(false)
    const [ task, setTask ] = useState(props.tarefa)

    function atualizarTarefas(){
        setTask(props.tarefa)
    }

    Icon.loadFont();

    return(        
        <View style={styles.itemLista} activeOpacity={0.3} key={props.id}>     
            <CheckBox value={props.completed} onChange={()=>props.toggleStatus(props.completed, props.id)} />
            <TextInput style={styles.textoLista} value={task} editable={edit} onChangeText={e=>setTask(e)}/>
            {edit ? 
                <TouchableOpacity style={styles.icon} onPress={()=>{props.editar(props.tarefa, props.id), setEdit(!edit)}}>
                    <Icon name="check-circle" size={30} color="#414b6e" />
                </TouchableOpacity> :
                <TouchableOpacity style={styles.icon} onPress={()=>setEdit(!edit)}>
                    <Icon name="edit" size={30} color="#414b6e" />
                </TouchableOpacity>                   
            }
            <TouchableOpacity style={styles.icon} onPress={()=>{props.deletar(props.id)}}>
                <Icon name="delete" size={30} color="#414b6e" />
            </TouchableOpacity>
        </View>           
    )
}

const styles = StyleSheet.create({
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
    },
    icon: {
        marginLeft: 10
    }
})