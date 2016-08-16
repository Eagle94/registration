import {
  validateEmail,
  validateLoginPassword,
  validateRegPassword,
  validateUsername
} from './util/formValidation'

export function validateLoginForm(email, password) {
  return new Promise( (resolve, reject ) => {

    const emailStatus = validateEmail(email);
    const passStatus = validateLoginPassword(password);

    if (emailStatus || passStatus) {
      return resolve({
        emailStatus: emailStatus,
        passStatus: passStatus
      });
    } else {
      return reject({
        email: email,
        password: password
      });
    }
  });
}

export function validateRegistrationForm(email, name, password, secondPassword) {
  return new Promise( (resolve, reject ) => {

    const emailStatus = validateEmail(email);
    const usernameStatus = validateUsername(name);
    const passStatus = validateRegPassword(password, secondPassword);

    if(emailStatus || usernameStatus || passStatus) {
      return resolve({
        emailStatus: emailStatus,
        usernameStatus: usernameStatus,
        passStatus: passStatus
      });
    } else {
      return reject({
        email: email,
        name: name,
        password: password
      });
    }
  })
}

export function authService(email, pass) {
  const reqBody = JSON.stringify({email: email, password: pass})
  return fetch('http://localhost:3000/login/', {
    credentials: 'some-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: reqBody
  })
  .then ( response => {
    if(response.status >= 200 && response.status < 300) {
      return response.json();
    }
    return Promise.reject(response.json());
  })
}

export function registrationService(email, name, pass) {
  const reqBody = JSON.stringify({email: email, name: name, password: pass});
  return fetch('http://localhost:3000/signup/', {
    credentials: 'some-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: reqBody
  })
  .then( response => {
    if(response.status >= 200 && response.status < 300) {
      return response.json();
    }
    return Promise.reject(response.json());
  })
}
