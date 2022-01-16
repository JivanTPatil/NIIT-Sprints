// put the solution code to persist and fetch data here
// method to persist data

function submitData(e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest(); //http object
  // object created
  let requestBody = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    homeNo: document.getElementById("homeNo").value,
    workNo: document.getElementById("workNo").value,
    birthdate: document.getElementById("birthdate").value,
    company: document.getElementById("company").value,
    jobTitle: document.getElementById("jobTitle").value,
    notes: document.getElementById("notes").value,
  };
  xhr.open("POST", "http://localhost:3000/contacts", true); // opening connection
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); //sets the value of an HTTP request header
  xhr.send(JSON.stringify(requestBody)); //converts js object into string
  
};
// method to fetch all contacts
let myObj ='';
function getData(e) {
  e.preventDefault();
  //create an object of XMLHttpRequest
  let xhr = new XMLHttpRequest();
  //open the url
  xhr.open("GET", "http://localhost:3000/contacts", true);
  
  //when the ready state attribute changes
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let tableSection = document.getElementById("table-body");
      myObj = JSON.parse(this.responseText);
      // showContactData(e,myObj);
      myObj.forEach((person) => {
        // craeting one row
        tableSection.innerHTML += `<tr>`;
        tableSection.innerHTML +=
          `<td > ${person.firstname}</td>` +
          `<td> ${person.lastname}</td>` +
          `<td> ${person.email}</td>` +
          `<td> ${person.workNo}</td>` +
          `<td><button id="table-btn" onclick="return showContactData(${person.id})">+</button></td>`;
          tableSection.innerHTML += `</tr>`;
      });
    }
  };
  xhr.send();
}



// method to fetch contact by id
function showContactData(id){
  let contactDetails = document.getElementById('exampleModal');
  contactDetails.style.display="block";
  let contactData = document.getElementById('modal-body');
  myObj.forEach((person) => {
    if(person.id===id){
      contactData.innerHTML+= `<p>Firstname :${person.firstname}</p>`;
      contactData.innerHTML+= `<p>Lastname :${person.lastname}</p>`;
      contactData.innerHTML+= `<p>Email :${person.email}</p>`;
      contactData.innerHTML+= `<p>WorkNo :${person.workNo}</p>`;
      contactData.innerHTML+= `<p>JobTitle :${person.jobTitle}</p>`;
    }
  })
  
}
// closing tab by 1st btn
let btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', () => {
  var x = document.getElementById('exampleModal');
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
  // to clear all inner html tags
  document.getElementById('modal-body').innerHTML = "";
});
// closing tab by 2nd btn
let close = document.getElementById('btn-close1');
close.addEventListener('click', () => {
  var x = document.getElementById('exampleModal');
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
  document.getElementById('modal-body').innerHTML = "";
});
    