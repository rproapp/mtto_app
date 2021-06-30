import request from '@/store/request'

export function getData (query) {
  return request({
    url: '/api/Manufactura',
    method: 'GET',
    params: query
  })
}

export function sendData (data) {
  return request({
    url: '/api/Manufactura',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    data
  })
}

export function deleteData (id) {
  return request({
    url: `/api/Manufactura/${id}`,
    method: 'delete'
  })
}
