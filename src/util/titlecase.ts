
const titleCase = (phrase: String) => {

    const words = phrase.split(' ')
    
    if (words.length === 0)
        return ''
    
    for (let i = 0; i < words.length; i++){
        if (words[i][0] === '(' || !words[i][0]){
            break
        }
        console.log(words[i])
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words.join(' ')
}

export default titleCase