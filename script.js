window.onload = function(){
	// Buttons
	var AddBtn = document.getElementById('addContact');
	// Form Fields
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	var relation = document.getElementById('relation');
	// Divs etc.
	var addBookDiv = document.querySelector('.addbook');

	AddBtn.addEventListener("click", addToBook);

	addBookDiv.addEventListener("click", removeEntry);

	// Storage Array
	var addressBook = [];


	function jsonStructure(name,email,phone,relation){
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.relation = relation
	}

	function addToBook(){
		var isNull = name.value!='' && email.value!='' && phone.value!='' && relation.value!='';
		if(isNull){
			// format the input into a valid JSON structure
			var obj = new jsonStructure(name.value,email.value,phone.value,relation.value);
			addressBook.push(obj);
			localStorage['addbook'] = JSON.stringify(addressBook);
			clearForm();
			showAddressBook();
		}
	}

	function removeEntry(e){
		// Remove an entry from the addressbook
		if(e.target.classList.contains('delbutton')){
			var remID = e.target.getAttribute('data-id');
			addressBook.splice(remID,1);
			localStorage['addbook'] = JSON.stringify(addressBook);
			showAddressBook();
		}
	}

	function clearForm(){
		var myinputs = document.querySelectorAll('.myinputs');
		for(var i in myinputs){
			myinputs[i].value = '';
		}
	}

	function showAddressBook(){
		if(localStorage['addbook'] === undefined){
			localStorage['addbook'] = '';
		} else {
			addressBook = JSON.parse(localStorage['addbook']);
			// Loop over the array addressBook and insert into the page
			addBookDiv.innerHTML = '';
			for(var n in addressBook){
				var str = '<section class="entry">';
					str += '<div class="name"><p>' + addressBook[n].name + '</p></div>';
					str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
					str += '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
					str += '<div class="address"><p>' + addressBook[n].relation + '</p></div>';
          str += '<div class="del"><i class="fas fa-trash delbutton" data-id="' + n + '"></i></div>';
					str += '</section>';
				addBookDiv.innerHTML += str;
			}
		}
	}

	showAddressBook();

}

