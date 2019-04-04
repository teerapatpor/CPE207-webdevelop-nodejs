const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const genderInput = document.querySelector('#gender');
const masgInput = document.querySelector('.msg2');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

class contact {
    constructor(name, email, phone, gender, msg) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.msg = msg;
    }
}
class show {
    static showContact(contact) {
        const co = document.createElement('tr');
        co.innerHTML = `<th>${contact.name}, ${contact.email},  ${contact.phone}, ${contact.gender} : ${contact.msg} </th>
        <td><input type="button" value="x" class="btn"></td>`;

        userList.appendChild(co);      
    }

    static deleteContact(cont) {
        const contact = keep.getContact();
        let rem = 0;
        // console.log(cont);
        for (let p = 0; p < contact.length; p++) {
            let names = contact[p].name;
            let emails = contact[p].email;
            let phones = contact[p].phone;
            let genders = contact[p].gender;
            if (cont.includes(names) && cont.includes(emails) && cont.includes(phones) && cont.includes(genders)) {
                rem = p;
            }
        }
        for (let j = 0; j < contact.length; j++) {
            if (j !== rem) {
                keep.adddelete(contact[j]);
            }
            if (j === contact.length - 1) {
                localStorage.removeItem('contacts');

            }
        }

        const contact2 = keep.getDelete();
        for (let j = 0; j < contact2.length; j++) {
            keep.addcontact(contact2[j]);
            if (j === contact2.length - 1) {
                localStorage.removeItem('delete');
            }
        }

        document.location.reload(true)
    }
}
class keep {
    static getContact() {
        let contacts;
        if (localStorage.getItem('contacts') === null) {
            contacts = [];
        } else {
            contacts = JSON.parse(localStorage.getItem('contacts'));
        }
        return contacts;
    }

    static getDelete() {
        let contacts;
        if (localStorage.getItem('delete') === null) {
            contacts = [];
        } else {
            contacts = JSON.parse(localStorage.getItem('delete'));
        }
        return contacts;
    }

    static addcontact(contact) {
        const contacts = keep.getContact();
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    static adddelete(contact) {
        const contacts = keep.getDelete();
        contacts.push(contact);
        localStorage.setItem('delete', JSON.stringify(contacts));
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const contacts = keep.getContact();
    for (let p = 0; p < contacts.length; p++) {
        show.showContact(contacts[p]);
    }
});

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || genderInput.value === 'none') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    } else {
        const con = new contact(nameInput.value, emailInput.value, phoneInput.value, genderInput.value, masgInput.value);
        show.showContact(con);
        document.location.reload(true)
        keep.addcontact(con);

        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        genderInput.value = '';
        masgInput.value = '';
    } 
}


userList.addEventListener('click', (e) => {
    e.preventDefault();
    show.deleteContact(e.target.parentElement.previousElementSibling.textContent);


});

