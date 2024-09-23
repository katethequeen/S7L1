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

    sameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  const pet = new Pet(_petName, _ownerName, _species, _breed);
  petList.push(pet);

  updateList();

  alert("Data submitted successfully!");
  event.target.reset();
}

function updateList() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  for (let i = 0; i < petList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <p>
    Pet Name: ${petList[i].petName}, Owner Name: ${petList[i].ownerName}, Species: ${petList[i].species}, Breed: ${petList[i].breed}
    </p>`;
    ul.appendChild(listItem);

    for (let j = 0; j < i; j++) {
      const isSameOwner = petList[i].sameOwner(petList[j]);
      if (isSameOwner) {
        listItem.classList.add("same-owner");
      }
    }
  }
}
