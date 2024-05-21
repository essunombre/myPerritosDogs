
export async function getRandomQuote(url, doThis){
    const response = await fetch(url)

    if (response.ok){
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length); // Generate random index
        const randomQuote = data[randomIndex];
        console.log(`${randomQuote.author} - ${randomQuote.text}`)
        return randomQuote;
    }    
}




