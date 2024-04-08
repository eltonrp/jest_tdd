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

const consultApi = async(url) => {
  try {
    const response = await fetch(url)
    const json  = await response.json()
    return json
  } catch(error) {
    return error
  }
}

module.exports = { sayHello, olaMundo, removeSpacing, countingStrings, remAndUpper, consultApi }
