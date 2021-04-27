import { request } from './api.service'

const getToures = () => request({ url: 'toure', method: 'get' })
const getToure = (id) => request({ url: `toure/${id}`, method: 'get' })

export { getToures, getToure }
