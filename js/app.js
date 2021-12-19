function capitalizeWords(str) {
 let words = str.split(' ').map(e => {
  // let firstLetter = e.slice(0, 1);
  // let rest = e.slice(1);
  // firstLetter = firstLetter.toUpperCase();
  // return `${firstLetter}${rest}`
  return e.charAt(0).toUpperCase() + e.slice(1);
 });

 return words.join(" ");
}

console.log(capitalizeWords('I got up early today'));