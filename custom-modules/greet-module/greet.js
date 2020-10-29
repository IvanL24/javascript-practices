module.exports = "Nihao World!";


// OTHER WAY


const greet = function(lang) {

  if (lang === 'en') {
    return "Hello!";
  } else if (lang === "es") {
    return "Hola!";
  } else if (lang === "ch") {
    return 'Nihao!';
  } else if (lang === "jp") {
    return 'Konnichiwa!';
  } else {
    return 'language not defined.';
  }

}

module.exports = greet;