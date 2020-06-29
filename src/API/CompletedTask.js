import axios from 'axios'

function completarTarefa(token, check, id) {

    return axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
        completed: check
    },{
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then((resp) => {
            return resp.data
        })
}

export default completarTarefa;