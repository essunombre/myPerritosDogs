console.log('I am dog.js')

const section = document.querySelector('.container')
const button = document.querySelector('.dogRandom')

console.log(section)
console.log(button)

// button.addEventListener('click', getRandomDog)

// fetch always succeeds so I need to validate the response


export async function getRandomDog(url){
    const response = await fetch(url);

    // check if ressponse is successful
    if(response.ok){
        const data = await response.json();
        // console.log(`Response: ${data}`)
        // console.log(data)
        return(data)
    }
}

// getRandomDog('https://dog.ceo/api/breed/dachshund/images/random')
