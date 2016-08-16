import validator from 'validator'

export function validateEmail(email) {
  return validator.isEmail(email)
    ? null
    : "Некорректный email.";
}

export function validateLoginPassword(password) {
  return validator.isLength(password, {min: 8, max: undefined})
            ? null
            : "Пароль должен состоять минимум из 8 символов.";
}

export function validateRegPassword(password, secondPassword) {
  return validator.equals(password, secondPassword)
            ? validator.isLength(password, {min: 8, max: undefined})
              ? null
              : "Пароль должен состоять минимум из 8 символов."
            : "Пароли должны быть одинаковыми.";
}

export function validateUsername(username) {
  return validator.isLength(username, {min: 4, max: undefined})
            ? null
            : "Имя должно состоять минимум из 4 символов."
}
