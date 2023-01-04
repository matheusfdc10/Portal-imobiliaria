import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://claudiacorretor.myartsonline.com'
})

export const getUser = async (login, password) => {
    const url = `/api_usuario.php?acao=login&login=${login}&senha=${password}`
    return api.get(url)
}
