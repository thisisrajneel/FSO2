import axios from 'axios'

const baseurl = '/api/persons'

const getAll = async () => {
    const request = axios.get(baseurl)
    const response = await request
    return response.data
}

const create = async (obj) => {
    const request = axios.post(baseurl, obj)
    const response = await request
    return response.data
}

const deleteOne = async (id) => {
    const request = axios.delete(`${baseurl}/${id}`)
    const response = await request
    return response.data
}

const update = async (id, obj) => {
    const request = axios.put(`${baseurl}/${id}`, obj)
    const response = await request
    return response.data
}

export default {
    getAll,
    create,
    deleteOne,
    update
}