const nome = 'marcos'
const sexo = 'm'
const peso = 96.1
const altura = 1.84
const idade = 30
const contribuicao = 13

const imc = peso / (altura * altura)

if (imc > 30) {
  if (idade + contribuicao >= 95) {
    // Condição 1 e 2 passaram
    console.log(`${nome}, você estar a cima do peso e você pode se aponsentar`)
  } else {
    // Condição 1 passou, porém condição 2 não passou
    console.log(
      `${nome}, você estar a cima do peso e você não pode se aponsentar`
    )
  }
} else {
  // Condição 1 não passou
  console.log(`${nome}, você não estar a cima`)
}
