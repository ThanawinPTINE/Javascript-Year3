function censorWord(sentence, wordtoCensor) {
    const regex = new RegExp(wordtoCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText
}

const originalPost = "JavaScript is fun, but somtimes javascript can be tricky"
const cleanPost = censorWord(originalPost, "javascript");

console.log(cleanPost)