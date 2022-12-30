const input = document.querySelector('.textarea')
const btn = document.querySelector('.btn')
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const rslt1 = document.querySelector('.p1')
const rslt2 = document.querySelector('.p2')
const rslt3 = document.querySelector('.p3')

btn.addEventListener('click', function () {
  secretMessage()
})

function secretMessage () {
  const str = input.value
  const normalizedInput = str.replace(/[^\w]/g, '').toLowerCase()
  const strLength = normalizedInput.length
  const cols = Math.ceil(Math.sqrt(strLength))

  let encodeMessage = ''
  let encode = ''

  if (strLength < 50) {
    alert('Must input at least 50 characters')
  } else {
    for (let i = 0; i < cols; i++) {
      for (let j = i; j < strLength; j += cols) {
        encodeMessage += normalizedInput[j]
        encode += normalizedInput[j]
      }
      encodeMessage += '\n'
    }

    heading1.innerHTML = 'Normalized Input : '
    heading2.innerHTML = 'Encoded Message in Chunks : '
    heading3.innerHTML = 'Encoded Message : '
    rslt1.innerHTML = `${normalizedInput}`
    rslt2.innerHTML = `${encodeMessage} `
    rslt3.innerHTML = `${encode}`
  }
}