const { sayHello, olaMundo, removeSpacing, countingStrings, remAndUpper } = require('./functions')

const stringTest = '  String com espaços    '

test('Função deve printar Hello World', () => {
  expect(sayHello()).toBe('Hello World!')
})

test('Função deve printar Olá Mundo!', () => {
  expect(olaMundo()).toBe('Olá Mundo!')
})

test('Deve retornar string sem espaços', () => {
  expect(removeSpacing(stringTest)).toBe('String com espaços')
})

test('Função deve contar quantos caracteres tem na string', () => {
  const countedString = 'Cadeiras'
  expect(countingStrings(countedString)).toBe(8)
})

test('Deve remover espaços e colocar em uppercase', () => {
  let finalString = remAndUpper(stringTest)
  expect(finalString).toBe('STRING COM ESPAÇOS')
})
