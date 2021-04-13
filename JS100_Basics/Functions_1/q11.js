/*
**const localGreet = function (locale) {
**  let language = locale.split('_')[0];
**  let region = locale.split('_')[1]
**                     .split('.')[0];
**
**  if (language === 'en') {
**    switch (region) {
**      case 'US':
**        return "Hey!";
**      case 'GB':
**        return "Hello!";
**      case 'AU':
**        return "Howdy!";
**      default:
**        return "Hi!";
**    }
**  } else {
**      switch (language) {
**        case 'fr':
**        return "Salut!";
**      case 'pt':
**        return "Ola!";
**      case 'de':
**        return "Hallo!";
**      case 'sv':
**        return "Hej!";
**      case 'af':
**        return "Haai!"
**      default:
**        return "Not a valid language code";
**    }
**  }
**}
*/

// A better way to do this is to create and call functions within localGreet:

// define greet()
const greet = function (code) {
  switch (code) {
    case 'en':
      return "Hi!";
    case 'fr':
      return "Salut!";
    case 'pt':
      return "Ola!";
    case 'de':
      return "Hallo!";
    case 'sv':
      return "Hej!";
    case 'af':
      return "Haai!"
    default:
      return "Not a valid language code";
  }
}

// define extractLanguage()
const extractLanguage = function(locale) {
  return locale.split('_')[0];
}

// define extractRegion()
const extractRegion = function(locale) {
  // return locale.split('_')[1].split('.')[0]; for better readability write as below
  return locale.split('_')[1]
               .split('.')[0];
}

// define localGreet()
const localGreet = function (locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return "Hey!";
    case "GB": return "Hello!";
    case "AU": return "Howdy!";
    default: return greet(language);
  }
}


console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));