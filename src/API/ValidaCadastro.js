import axios from 'axios'

function cadastrar(nome, email) {

    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users', {
        fullName: nome,
        email: email
    })
        .then(data => {
            return
        })
}

export default cadastrar;