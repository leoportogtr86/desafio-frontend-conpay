const axios = require('axios')


axios.post('http://localhost:8080/products', {

    id: 11,
    name: "acoustic guitar",
    details: "Fender - CC-123 SCE CONCERT SOLID TOP CUTAWAY ELETROACUSTICO",
    price: 2000,
    image: "https://www.fender.com.br/imgs/produtos/gra/fender_10172226.jpg"


}).then((res) => {


    console.log(res.data)
}).catch((err) => {

    console.log(err)
})