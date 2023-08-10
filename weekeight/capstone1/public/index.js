const form = document.querySelector('#contacts-form')


const firstNameInput = document.querySelector('#firstName-input')
const lastNameInput = document.querySelector('#lastName-input')
const emailInput = document.querySelector('#email-input')
const contactsContainer = document.querySelector('#contacts-container')
const tableBody = document.querySelector('#table_body')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
function handleSubmit(e) {
    e.preventDefault()


  
    if (firstNameInput.value == '') {
        alert ('You must enter a First Name')
        return
    }
    if (lastNameInput.value == '') {
        alert ('You must enter a Last Name')
        return
    }
    if (emailInput.value == '') {
        alert ('You must enter a Email')
        return
    }
    if (!emailRegex.test(emailInput.value)) {
        alert('Invalid email format')
        return
    }

  
    

    
    let body = {
        firstName: firstNameInput.value, 
        lastName: lastNameInput.value, 
        email: emailInput.value
        

    }

    axios.post('http://localhost:4004/contacts', body)
        .then(() => {
            firstNameInput.value = ''
            lastNameInput.value = ''
            emailInput.value = ''
            
            getContacts()
        })
}

function deleteContact(id) {
    axios.delete(`http://localhost:4004/contacts/${id}`)
        .then(() => getContacts())
        .catch(err => console.log(err))
}

function handleUpdate(id) {
    const updatedFirstName = prompt('Enter updated First Name:');
    const updatedLastName = prompt('Enter updated Last Name:');
    const updatedEmail = prompt('Enter updated Email:');

    if (updatedFirstName && updatedLastName && updatedEmail) {
        const updatedContact = {
            firstName: updatedFirstName,
            lastName: updatedLastName,
            email: updatedEmail
        };

        axios.put(`http://localhost:4004/contacts/${id}`, updatedContact)
            .then(() => {
                alert('Contact updated successfully');
                getContacts();
            })
            .catch(err => console.log(err));
    } else {
        alert('Please provide valid values for update.');
    }
}   

function getContacts() {
tableBody.innerHTML = ''
    axios.get('http://localhost:4004/contacts')
        .then(res => {
            console.log(res)
        
            res.data.forEach(elem => {
                
               let tableData = `<tr>
                <th scope="row">${elem.firstname}</th>
                <td scope="row">${elem.lastname}</td>
                <td scope="row">${elem.email}</td>
           
                <td width="265rem">
           
               <button class="btn btn-info" onclick="handleUpdate(${elem.contact_id})">Update</button>
                <button class="btn btn-danger" onclick="deleteContact(${elem.contact_id})">Delete</button>
                </td>
                 </tr>
                `
               tableBody.innerHTML += tableData 
               
            })
        })
}


function logout(){
    window.location.href = "login.html";
}



getContacts()
console.log("hello")


form.addEventListener('submit', handleSubmit)

