const { sayHello, olaMundo, removeSpacing, countingStrings, remAndUpper, consultApi } = require('./functions')

const stringTest = '  String com espaços    '

test('Deve printar Hello World', () => {
  expect(sayHello()).toBe('Hello World!')
})

test('Deve printar Olá Mundo!', () => {
  expect(olaMundo()).toBe('Olá Mundo!')
})

test('Deve retornar string sem espaços', () => {
  expect(removeSpacing(stringTest)).toBe('String com espaços')
})

test('Deve contar quantos caracteres tem na string', () => {
  const countedString = 'Cadeiras'
  expect(countingStrings(countedString)).toBe(8)
})

test('Deve remover espaços e colocar em uppercase', () => {
  let finalString = remAndUpper(stringTest)
  expect(finalString).toBe('STRING COM ESPAÇOS')
})

test('Deve consultar uma api', async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const result = await consultApi(url)
  expect(typeof result).toBe('object')
  console.log(result)
})

test('Deve retornar um erro, por url inválida', async() => {
  const url = ''
  const result = await consultApi(url)
  expect(result.name).toBe('TypeError')
})
