import axios from 'axios'

const baseUrl = 'api/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then((res) => res.data)
}

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject)
  return req.then((res) => res.data)
}

const update = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
      return 'error'
    })
}

const deletePerson = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then((res) => res.data)
}

export default { getAll, create, update, deletePerson }
