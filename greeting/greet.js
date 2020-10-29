
const lang = process.argv[2];



function greet(lang) {

  if (lang === 'en') {
    console.log("Hello!");
  } else if (lang === "es") {
    console.log("Hola!");
  } else if (lang === "ch") {
    console.log('Nihao!');
  } else if (lang === "jp") {
    console.log('Konnichiwa!');
  } else {
    console.log('language not defined.');
  }

}

greet(lang);