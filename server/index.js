const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())

app.use(express.json());



let inputs = [];

app.post('/api/post', (req, res) => {
    let body = req.query.name
    inputs.push(body)
    res.status(200).send(inputs)
})

app.delete('/clear', (req, res) => {
    inputs = [];
    res.sendStatus(200)
})






// const inputForm = document.querySelector('#inputForm')
// const inputStuff = document.querySelector('#inputStuff')
// const inputBtn = document.querySelector('#inputBtn')


// let inputs = [];


// inputForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     axios.get('http://localhost:4000/inputs')
//     .then((response) => {
//         inputs.push(response.data)
//     })
//     .catch(() => {

//     })


// })



/*
ageForm.addEventListener('submit', (event) => {
  event.preventDefault()

  let age = ageInput.value

  axios.get(`${baseURL}/character?age=${age}`)
  .then((response) => {
    clearCharacters()
    for (let i = 0; i < response.data.length; i++) {
      createCharacterCard(response.data[i]);
    }

  })
  .catch((error) => {

  })
})

*/


app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });



app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });









app.listen(4000, () => console.log('Server running on 4000.'))