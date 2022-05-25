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
  .then((res) => {
    console.log('from registerAPI =>', res)
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
  .then((res) => {
    console.log('from loginAPI =>', res)
  })
  .catch((err) => {
    console.log(err)
  })
}