import axios from "axios";
const baseUrl = '/api/employees'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(`${baseUrl}/post`, newObject)
    return response.data
}

const update = (id, newObject) => {
    const request = axios.patch(`${baseUrl}/update/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteEmployee = (id) => {
    const request = axios.delete(`${baseUrl}/delete/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteEmployee }