import './style.scss'

const textInput = document.querySelector('.input')
const generateBtn = document.querySelector('.btn')
const qrContainer = document.querySelector('.qr-container')
const qrImg = document.querySelector('.qr-img')
let inputValue

textInput.addEventListener('input', () => getInputValue(textInput))

function getInputValue(e) {
  inputValue = e.value
  if (e.value.length < 1 || e.value === '') {
    qrContainer.classList.remove('active')
    qrImg.removeAttribute('src')
  }
}

function getQr() {
  if (inputValue < 1) return
  qrContainer.classList.add('active')
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
}

generateBtn.addEventListener('click', getQr)
