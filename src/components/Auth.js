const BASE_URL = 'https://auth.nomoreparties.co';
function checkResponse(res) {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(res.status)
  }
}

export function registerAPI (email, password) {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
}

export function loginAPI (email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
}

export function getContentAPI (token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
    }
  })
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
  })
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    return console.log('err',err)
  })
}