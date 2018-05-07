window.onload = function(){
	let AddBtn = document.getElementById('addContact');
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let phone = document.getElementById('phone');
	let relation = document.getElementById('relation');
	let addBookDiv = document.querySelector('.addbook');

	AddBtn.addEventListener("click", addToBook);

	addBookDiv.addEventListener("click", deleteAt);

	let addressBook = [];


	function Structure(name,email,phone,relation){
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.relation = relation
	}

	function addToBook(){
		let isNull = name.value!='' && email.value!='' && phone.value!='' && relation.value!='';
		if(isNull){
			let obj = new Structure(name.value,email.value,phone.value,relation.value);
			addressBook.push(obj);
			addbook = JSON.stringify(addressBook);
			clearForm();
			showAddressBook();
		}
	}

	function deleteAt(e){
		if(e.target.classList.contains('delbutton')){
			let remID = e.target.getAttribute('data-id');
			addressBook.splice(remID,1);
			addbook = JSON.stringify(addressBook);
			showAddressBook();
		}
	}

	function clearForm(){
		let myinputs = document.querySelectorAll('.myinputs');
		for(let i in myinputs){
			myinputs[i].value = '';
		}
	}

	function showAddressBook(){
		if(addbook === undefined){
			addbook = '';
		} else {
			addressBook = JSON.parse(addbook);
			addBookDiv.innerHTML = '';
			for(let n in addressBook){
				let newDiv = '<section class="entry">';
					newDiv += `<div class="name"><p> Name: ${addressBook[n].name} </p></div>`;
					newDiv += `<div class="email"><p> Email: ${addressBook[n].email} </p></div>`;
					newDiv += `<div class="phone"><p> Phone: ${addressBook[n].phone} </p></div>`;
					newDiv += `<div class="address"><p> Relation: ${addressBook[n].relation} </p></div>`;
          newDiv += '<div class="del"><i class="fas fa-trash delbutton" data-id="' + n + '"></i></div>';
					newDiv += '</section>';
				addBookDiv.innerHTML += newDiv;
			}
		}
	}

	showAddressBook();

}

