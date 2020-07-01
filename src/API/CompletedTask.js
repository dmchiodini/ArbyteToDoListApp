import axios from 'axios'

function completarTarefa(token, check, description, id) {

    return axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
        description: description,
        completed: check
    },{
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then((resp) => {
            return resp.data
        })
}

export default completarTarefa;