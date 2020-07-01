import axios from 'axios'

function buscarTarefas(token) {

    return axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => {
            return resp.data
        })
}

export default buscarTarefas;
