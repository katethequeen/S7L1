//First Exercise

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherPerson) {
    if (this.age > otherPerson.age) {
      return console.log(`${this.firstName} is older than ${otherPerson.firstName}`);
    } else if (this.age < otherPerson.age) {
      return console.log(`${otherPerson.firstName} is older than ${this.firstName}`);
    } else {
      return console.log(`${this.firstName} and ${otherPerson.firstName} have the same age!!`);
    }
  }
}

const per1 = new User("Mario", "Rossi", 25, "Roma");
const per2 = new User("Maria", "Bianchi", 89, "Venezia");
const per3 = new User("Giovanni", "Muchacha", 25, "Bergamo");

console.log(per1.compareAge(per3));

//Second Exercise

const petList = [];

function handleSubmit(event) {
  event.preventDefault();

  const _petName = document.getElementById("petName").value;
  const _ownerName = document.getElementById("ownerName").value;
  const _species = document.getElementById("ownerName").value;
  const _breed = document.getElementById("breed").value;

  class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }

    sameOwner(currentOwnerName) {
      if (this.ownerName === currentOwnerName.ownerName) {
        return true;
      }
    }
  }
  alert("Data submitted successfully!");
  event.target.reset();

  const pet = new Pet(_petName, _ownerName, _species, _breed);
  petList.push(pet);
}

console.log(petList);
