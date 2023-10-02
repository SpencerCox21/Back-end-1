

let namedInput = document.getElementById('inputText')
let subForm = document.getElementById('submitBtn')
let clearArr = document.getElementById('clearInputArr')


const baseURL = 'http://127.0.0.1:4000'

function formSubmit(event) {
    event.preventDefault()

    axios.post(`${baseURL}/api/post?name=${namedInput.value}`)

    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}


subForm.addEventListener('submit', formSubmit)



function clearIndex(event) {
    axios.delete(`${baseURL}/clear`)
    .then(() => {
        alert('Array Deleted')
    })
    .catch(() => {
        alert('Array Not Deleted')
    })
}

clearArr.addEventListener('click', clearIndex)
