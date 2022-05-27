const BASE_URL = 'https://auth.nomoreparties.co';

export function registerAPI (email, password) {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .catch ((err) => {
    console.log(err)
  })
}

export function loginAPI (email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
  })
  .catch((err) => {
    console.log(err)
  })
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