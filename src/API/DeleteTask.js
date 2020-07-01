import axios from 'axios'

function deletarTarefa(token, id) {

    return axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then((resp) => {
            return 
        })
}

export default deletarTarefa;