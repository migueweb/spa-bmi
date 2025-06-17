const $form = document.querySelector('#form')
const $result = document.querySelector('#result')


$form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const weight = parseFloat(e.target[1].value)
    const height = parseFloat(e.target[2].value)

    const bmi = weight / (height**2)
    
    $result.innerText = `Your BMI is ${bmi.toFixed(2)}`
})