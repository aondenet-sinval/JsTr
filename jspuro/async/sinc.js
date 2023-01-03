let p = []
const soma = () => {
  return 2 + 2
}

let hello = async () => {
  const valor = soma()
  return `Hello ${valor}`
}

hello().then(value => {
  p.push(value)
  console.log(p)
  console.log(value)
})
console.log(p)
