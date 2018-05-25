$(document).ready(function () {
  attachListeners();
})

function attachListeners () {
  $('#view-pets').on('click', displayUserPets)
}

function displayUserPets(e) {
  e.preventDefault();
  $.getJSON(this.href).done(function(data) {
    $('#additional-pets').html('');
    data.forEach(function (pet) {
      let newUserPet = new Pet(pet.id, pet.name, pet.nickname, pet.animal, pet.age, pet.breed, pet.info, pet.owner);
      let formattedUserPet = newUserPet.formatUserPet();
      $('#additional-pets').append(formattedUserPet);
    })
  })
}

// ***** organize models into own file? ******
function User(id, username, pets) {
  this.id = id;
  this.username = username;
  this.pets = pets;
};

function Pet(id, name, nickname, animal, age, breed, info, owner) {
  this.id = id;
  this.name = name;
  this.nickname = nickname;
  this.animal = animal;
  this.age = age;
  this.breed = breed;
  this.info = info;
  this.owner = owner;
}

// **** figure out way to use this instead? ****
// User.prototype.formatUserPets = function () {
//   let userPetHtml = '';
//   this.pets.forEach(function(pet) {
//     userPetHtml +=  `<h4>Name: ${pet.name}</h4>`
//     userPetHtml +=  '<ul>'
//     if (pet.nickname != undefined) {
//       userPetHtml +=  `<p>Nickname: ${pet.nickname}</p>`
//     }
//     userPetHtml +=  `<p>Species:  ${pet.animal}</p>`
//     if (pet.age != undefined) {
//       userPetHtml +=  `<p>Age: ${pet.age}</p>`
//     }
//     if (pet.breed != undefined) {
//       userPetHtml +=  `<p><%= "Breed: #{pet.breed}" if pet.breed != "" %></p>`
//     }
//     if (pet.info != undefined) {
//       userPetHtml +=  `<p><%= "Info: #{pet.info}" if pet.info != "" %></p>`
//     }
//     userPetHtml +=  '</ul><br />'
//   })
//   return userPetHtml;
// }

Pet.prototype.formatUserPet = function () {
  let userPetHtml = '';
  userPetHtml +=  `<h4>Name: ${this.name}</h4>`
  userPetHtml +=  '<ul>'
  if (pet.nickname != undefined) {
    userPetHtml +=  `<p>Nickname: ${this.nickname}</p>`
  }
  userPetHtml +=  `<p>Species:  ${this.animal}</p>`
  if (pet.age != undefined) {
    userPetHtml +=  `<p>Age: ${this.age}</p>`
  }
  if (pet.breed != undefined) {
    userPetHtml +=  `<p>Breed: ${this.breed}</p>`
  }
  if (pet.info != undefined) {
    userPetHtml +=  `<p>Info: ${this.info}</p>`
  }
  userPetHtml +=  '</ul><br />'
  return userPetHtml;
}
