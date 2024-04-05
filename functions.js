const sayHello = () => {
  return 'Hello World!'
}

const olaMundo = () => {
  return 'Olá Mundo!'
}

const removeSpacing = (string) => {
  return string.trim()
}

const countingStrings = (string) => {
  return string.length
}

const remAndUpper = (string) => {
  return removeSpacing(string).toUpperCase()
}

module.exports = { sayHello, olaMundo, removeSpacing, countingStrings, remAndUpper }
