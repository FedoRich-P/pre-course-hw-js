let str = "zzzyzzz";

const searchLetter = (word, letter) => {
   return  word.includes(letter) ? 'нашел' : 'заблудился'
}

console.log(searchLetter(str, 'y'))



