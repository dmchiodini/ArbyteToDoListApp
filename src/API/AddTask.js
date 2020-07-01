import axios from 'axios'

function adicionarTarefa(tarefa, status, token) {

    return axios.post('https://arbyte-todo-list-api.herokuapp.com/tasks', {
            description: tarefa, 
            completed: status
          },{
            headers: {'Authorization': `Bearer ${token}`}
          })
        .then(resp => {
            return 
        })
        .catch((err) => {
            console.log(Err)
        })
}

export default adicionarTarefa;
