// Määritellään tyhjä taulukko puhelinluettelolle johon voidaan myöhemmin lisätä objekteja
let phoneDirectory = [];

// Funktio jossa lisätään henkilö puhelinluettelo taulukkoon .push metodin avulla
function addPerson(name, phoneNumber) {
  phoneDirectory.push({ name, phoneNumber });
}

// Funktio jossa etsitään nimen perusteella numero puhelinluettelotaulukosta .find metodin avulla
function findPhoneNumberByName(name) {
  const result = phoneDirectory.find((person) => person.name === name);
  return result ? result.phoneNumber : "Number not found";
}

// Lisätään henkilöitä puhelinluetteloon
addPerson("Matti Meikäläinen", "040-1234567");
addPerson("Maija Virtanen", "050-7654321");
addPerson("Markku Virtanen", "044-3579468");
addPerson("Tiina Määttä", "045-7758469");
addPerson("Jaana Meikäläinen", "040-0585457");

// Etsitään nimen perusteella puhelinnumero findPhoneNumberByName funktion avulla, ja tulostetaan logiin
const nameToSearch = "Jaana Meikäläinen";
const phoneNumber = findPhoneNumberByName(nameToSearch);
console.log(`Puhelinnumero henkilölle ${nameToSearch} on: ${phoneNumber}`);

// En ihan 100% varmaksi ymmärtänyt olisiko tässä pitänyt käyttäjältä kysyä tietoa vai sopiko että näin koodissa itse lisään tiedot
// Lisäksi olisin tehdä sellaisen ohjelman jossa riittää että hakee esim. sukunimellä, ja saan kaikki sen nimiset henkilöt
//mutta en osannut sitten kuitenkaan tätä tehdä yrityksestä huolimatta
