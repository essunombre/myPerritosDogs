// console.log('I am dog.js')

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
