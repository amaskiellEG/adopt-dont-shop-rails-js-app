$(document).ready(function () {
  attachIndexListeners();
})

function attachIndexListeners () {
  $('.js-next').on('click', loadNextShelters)
}

function loadNextShelters (e) {
  e.preventDefault();
}

function Shelter(id, name, email, phoneNumber, address) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

Shelter.prototype.formatShelterIndex = function () {
  let shelterIndexHtml = '';
}
