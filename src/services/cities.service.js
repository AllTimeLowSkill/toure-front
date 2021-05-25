import { request } from './api.service'

const getCities = () => request({ url: 'city', method: 'get' })
const getCity = (id) => request({ url: `city/${id}`, method: 'get' })

export { getCities, getCity }
