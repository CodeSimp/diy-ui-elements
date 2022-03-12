
//Function to get the joke
const getJoke = async() => {
    //Getting the joke container
    const joke = document.querySelector('#joke p')
    const getLoader = document.querySelector('#joke .spinner')

    getLoader.classList.toggle('hide')
    joke.classList.toggle('hide')
    const res = await axios.get('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'
        }
    })
    
    getLoader.classList.toggle('hide')
    joke.classList.toggle('hide')
    joke.innerHTML = res.data.joke
}

//Listening to the button click
document.querySelector('#get-joke')
.addEventListener('click', ()=>{
    getJoke()
})