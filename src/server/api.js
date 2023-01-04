import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://claudiacorretor.myartsonline.com'
})

export const getUser = async (login, password) => {
    const url = `/api_usuario.php?acao=login&login=${login}&senha=${password}`
    return api.get(url)
}

// export const getUser = async (login, password) => {
//     return fetch('http://claudiacorretor.myartsonline.com/api_usuario.php?acao=login&login=matheus&senha=matheus').then(res => res.json())
//     // return axios.get('http://claudiacorretor.myartsonline.com/api_usuario.php?acao=login&login=matheus&senha=matheus')
// }