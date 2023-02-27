function resets() {
  document.getElementsByTagName("resetData").reset();
}

function session() {
  console.log(editDataRow, "editRow");
  let fname = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let website = document.getElementById("website");
  let contactname = document.getElementById("contactname");
  let contactphone = document.getElementById("contactphone");
  let contactemail = document.getElementById("contactemail");
  let notes = document.getElementById("notes");
  let comissionPercentage = document.getElementById("comissionPercentage");
  let activeFrom = document.getElementById("activeFrom");
  let criticalAccount = document.getElementById("criticalAccount");

  function displayRadiovalues() {
    let ele = document.getElementsByName("choise");
    let displayRadiovalue = "";
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) displayRadiovalue = ele[i].value;
    }
    return displayRadiovalue;
  }
  function displayselectedvalues() {
    let ele = document.getElementsByName("category");
    let selectedvalue = [];
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].selected) selectedvalue.push(ele[i].value);
    }
    return selectedvalue;
  }
  function displayvalue() {
    let paymentoption = document.getElementsByName("Payment Options");
    let selectedValues = [];
    for (let i = 0; i < paymentoption.length; i++) {
      if (paymentoption[i].checked) selectedValues.push(paymentoption[i].value);
    }
    return selectedValues;
  }
  //validation
  if (fname.value === "") {
    alert("please fill the field");
    return;
  }

  if (email.value === "") {
    alert("please fill the field");
    return;
  }
  if (phone.value === "") {
    alert("please fill the field");
    return;
  }
  if (website.value === "") {
    alert("Please fill the field");
    return;
  }
  if (contactname.value === "") {
    alert("please fill the field");
    return;
  }
  if (contactphone.value === "") {
    alert("please fill the field");
    return;
  }
  if (contactemail.value === "") {
    alert("please fill the field");
    return;
  }
  if (notes.value === "") {
    alert("please fill the field");
    return;
  }
  if (comissionPercentage.value === "") {
    alert("please fill the field");
    return;
  }
  if (activeFrom.value === "") {
    alert("please fill the field");
    return;
  }
  if (criticalAccount.value === "") {
    alert("please fill the field");
    return;
  }
  const data = {
    username: fname.value,
    userEmail: email.value,
    userphone: phone.value,
    userwebsite: website.value,
    usercontactname: contactname.value,
    usercontactphone: contactphone.value,
    usercontactemail: contactemail.value,
    usernotes: notes.value,
    usercomissionPercentage: comissionPercentage.value,
    useractiveFrom: activeFrom.value,
    usercriticalAccount: criticalAccount.value,
    userBusinessType: displayRadiovalues(),
    userselectedvalue: displayselectedvalues(),
    userpaymentoption: displayvalue(),
  };

  console.log(data);

  /*let validName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (fname.value.match(validName)) {
      console.log("sucess");
    } else {
      alert("please enter valid name");
      return;
    }
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(validEmail)) {
      console.log("sucess");
    } else {
      alert("please enter valid email");
      return;
    }
    let validNumbers = /^\d{10}$/;
    if (phone.value.match(validNumbers)) {
      console.log("sucess");
    } else {
      alert("please enter the PhoneNumber");
      return;
    }
    let validContactName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (contactname.value.match(validContactName)) {
      console.log("sucess");
    } else {
      alert("please enter valid Contactname");
      return;
    }
    let validContactNumbers = /^\d{10}$/;
    if (contactphone.value.match(validContactNumbers)) {
      console.log("sucess");
    } else {
      alert("please enter the ContactPhoneNumber");
      return;
    }
    let validContactEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (contactemail.value.match(validContactEmail)) {
      console.log("sucess");
    } else {
      alert("please enter validContactEmail");
      return;
    }*/

  //local storage set and set values

  let localStorageData = JSON.parse(localStorage.getItem("details"));
  if (localStorageData === null) localStorageData = [];
  if (editDataRow !== "") {
    localStorageData[editDataRow] = data;
  } else {
    localStorageData.push(data);
  }
  console.log(editDataRow);
  // localStorageData.push(data);
  localStorage.setItem("details", JSON.stringify(localStorageData));
  editDataRow = "";
  loadTableData();
}
loadTableData();

function loadTableData() {
  let localStorageData = localStorage.getItem("details");
  if (localStorageData === null) return;
  let personalInfo = JSON.parse(localStorageData);
  let tbody = document.getElementById("tableData");
  tbody.innerHTML = "";
  let personal;
  for (let i = 0; i < personalInfo.length; i++) {
    personal = personalInfo[i];
    if (personal === null) return;
    // console.log(personal);
    var tr = `<tr>
    <td>${personal.username}</td> 
    <td>${personal.userEmail}</td>
    <td>${personal.userphone} </td>
    <td>${personal.userwebsite} </td>
    <td>${personal.usercontactname} </td>
    <td>${personal.usercontactphone} </td>
    <td>${personal.usercontactemail} </td>
    <td>${personal.usernotes} </td>
    <td>${personal.userBusinessType} </td>
    <td>${personal.userselectedvalue} </td>
    <td>${personal.usercomissionPercentage} </td>
    <td>${personal.useractiveFrom} </td>
    <td>${personal.usercriticalAccount} </td>  
    <td>${personal.userpaymentoption} </td>
    <td><button id="praveen" class='btn btn-dark' onClick="editTable(${i})" >Edit</button></td>
      <td><button class='btn btn-dark' onClick= "deleteTable(${i})">Delete</button></td>
   </tr>`;

    tbody.innerHTML += tr;
  }
}
var editDataRow = "";

function editTable(i) {
  let localStorageData = localStorage.getItem("details");

  if (localStorageData === null) return;
  editDataRow = i;
  var personalInfo = JSON.parse(localStorageData);
  console.log(personalInfo);
  var editData = personalInfo[i];

  // console.log(editData);
  if (editData === null) return;
  document.getElementById("fname").value = editData.username;
  document.getElementById("email").value = editData.userEmail;
  document.getElementById("phone").value = editData.userphone;
  document.getElementById("website").value = editData.userwebsite;
  document.getElementById("contactname").value = editData.usercontactname;
  document.getElementById("contactphone").value = editData.usercontactphone;
  document.getElementById("contactemail").value = editData.usercontactemail;
  document.getElementById("notes").value = editData.usernotes;
  selectType(editData.userBusinessType);
  selectCategory(editData.userselectedvalue);

  document.getElementsByName("businesstype").selected =
    editData.userBusinessType;
  document.getElementsByName("category").value = editData.userselectedvalue;
  document.getElementById("comissionPercentage").value =
    editData.usercomissionPercentage;
  document.getElementById("activeFrom").value = editData.useractiveFrom;
  document.getElementById("criticalAccount").value =
    editData.usercriticalAccount;
  selectOption(editData.userpaymentoption);
  editflow = true;
  editindex = resets();
}

function selectType(value) {
  var allInputs = document.getElementsByName("choise");
  var results = [];
  for (var x = 0; x < allInputs.length; x++)
    if (allInputs[x].value == value) allInputs[x].checked = true;
  //results.push(allInputs[x]);
  return results;
}

function selectCategory(value) {
  var allInputs = document.getElementsByName("category");
  var results = [];
  for (var x = 0; x < allInputs.length; x++)
    for (var y = 0; y < value.length; y++)
      if (allInputs[x].value == value[y]) allInputs[x].selected = true;
  //results.push(allInputs[x]);
  return results;
}

function selectOption(value) {
  let allInputs = document.getElementsByName("Payment Options");
  let results = [];
  for (let x = 0; x < allInputs.length; x++)
    for (let y = 0; y < value.length; y++)
      if (allInputs[x].value == value[y]) allInputs[x].checked = true;
  //   results.push(allInputs[x]);
  return results;
}

function deleteTable(i) {
  let localStorageData = localStorage.getItem("details");
  if (localStorageData === null) return;
  var personalInfo = JSON.parse(localStorageData);
  personalInfo.splice(i, 1);

  console.log(personalInfo);
  localStorage.setItem("details", JSON.stringify(personalInfo));
  loadTableData();
}
var editindex = null;
loadTableData();

// function test() {
//   var cboxes = document.getElementsByName('mailId[]');
//   var len = cboxes.length;
//   for (var i=0; i<len; i++) {
//       alert(i + (cboxes[i].checked?' checked ':' unchecked ') + cboxes[i].value);
//   }
// }

// function selectOnlyOne(current_clicked) {
//   var cboxes = document.getElementsByName('mailId[]');
//   var len = cboxes.length;
//   for (var i=0; i<len; i++) {
//       cboxes[i].checked = (cboxes[i] == current);
//   }
// }
