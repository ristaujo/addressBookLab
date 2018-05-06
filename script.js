/* class addressBook {
  constructor () {
    this.contacts = [];
  }

  add(info) {
    let newcontact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newcontact);
    console.log(this.contacts);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }

  printThis() {
    console.log(this.contacts);
  }

};

class Contact {
  constructor (name, email, phone, relation) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.relation = relation;
  }
};

const address = new addressBook();
while (true) {
  let choice = prompt("Would you like to add, delete, print, or quit?");

  if (choice === "add") {
    let info = {
      name: prompt("What is the contact's name?"),
      email: prompt("What is the contact's email?"),
      phone: prompt("What is the contact's phone number?"),
      relation: prompt("What is the contact's relation to you?")
    }
    address.add(info);
  } else if (choice === "delete") {
    let index = prompt("Please specifiy which index you would like to delete.");
    address.deleteAt(index);
  } else if (choice === "print") {
    for (let i = 0; i < address.contacts.length; i++) {
      console.log(address.contacts[i]);
    }
  } else if (choice === "quit") {
    break;
  }
} */

window.onload = function() {
  //Button
  let AddBtn = document.getElementById("addContact");
  //Form Fields
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let relation = document.getElementById("relation");

  //Display Bottom Boxes
  let added_contacts_section = document.querySelector(".added_contacts");

  //Create Storage Array
  let addressBook = [];

  //Event Listener
  AddBtn.addEventListener("click", addToBook);

  function contactStructure(name,email,phone,relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }

  function addToBook(){
    let isNull = name.value != '' && email.value != '' && phone.value != '' && relation != '';
    if(isNull) {
      //Add to array
      let obj = new contactStructure(name.value,email.value,phone.value,relation.value);
      addressBook.push(obj);
    }
    console.log(isNull);
  }
}