import axios from 'axios'

function editarTarefa(token, task, id) {

    return axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
        description: task
    },{
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then((resp) => {
            return resp.data
        })
}

export default editarTarefa;