function session() {
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
    
      let value = JSON.parse(localStorage.getItem("details"));
    
      if (value === null) 
      value = [];
      value.push(data);
      localStorage.setItem("details", JSON.stringify(value));
    }
    
    function call(){
      let value = JSON.parse(localStorage.getItem("details"));
      value = [];
    }
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
      window.onload = function() {
        var data = JSON.parse(localStorage.getItem("details"));
        console.log(data[0].username);
        console.log(data.length);
      for (let i = 0; i < data.length; i++) 
      {
          let table = document.getElementById("show").getElementsByTagName("tbody")[0];
          let newRow = table.insertRow(table.length);
          let cell1 = newRow.insertCell(0);
          cell1.innerHTML =  data[i].username;
          let cell2 = newRow.insertCell(1);
          cell2.innerHTML = data[i].userEmail;
          let cell3 = newRow.insertCell(2);
          cell3.innerHTML = data[i].userphone;
          let cell4 = newRow.insertCell(3);
          cell4.innerHTML = data[i].userwebsite;
          let cell5 = newRow.insertCell(4);
          cell5.innerHTML = data[i].usercontactname;
          let cell6 = newRow.insertCell(5);
          cell6.innerHTML = data[i].usercontactphone;
          let cell7 = newRow.insertCell(6);
          cell7.innerHTML = data[i].usercontactemail;
          let cell8 = newRow.insertCell(7);
          cell8.innerHTML = data[i].usernotes;
          let cell9 = newRow.insertCell(8);
          cell9.innerHTML = displayRadiovalues();
          let cell10 = newRow.insertCell(9);
          cell10.innerHTML = displayselectedvalues();
          let cell11 = newRow.insertCell(10);
          cell11.innerHTML = data[i].usercomissionPercentage;
          let cell12 = newRow.insertCell(11);
          cell12.innerHTML = data[i].useractiveFrom;
          let cell13 = newRow.insertCell(12);
          cell13.innerHTML = data[i].usercriticalAccount;
          let cell14 = newRow.insertCell(13);
          cell14.innerHTML = displayvalue();
          let cell15 = newRow.insertCell(14);
          cell15.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
        }
    }
    function AddRow() {
  
        let table = document.getElementById("show").getElementsByTagName("tbody")[0];
          let newRow = table.insertRow(table.length);
          let cell1 = newRow.insertCell(0);
          cell1.innerHTML = fname.value;
          let cell2 = newRow.insertCell(1);
          cell2.innerHTML = email.value;
          let cell3 = newRow.insertCell(2);
          cell3.innerHTML = phone.value;
          let cell4 = newRow.insertCell(3);
          cell4.innerHTML = website.value;
          let cell5 = newRow.insertCell(4);
          cell5.innerHTML = contactname.value;
          let cell6 = newRow.insertCell(5);
          cell6.innerHTML = contactphone.value;
          let cell7 = newRow.insertCell(6);
          cell7.innerHTML = contactemail.value;
          let cell8 = newRow.insertCell(7);
          cell8.innerHTML = notes.value;
          let cell9 = newRow.insertCell(8);
          cell9.innerHTML = displayRadiovalues();
          let cell10 = newRow.insertCell(9);
          cell10.innerHTML = displayselectedvalues();
          let cell11 = newRow.insertCell(10);
          cell11.innerHTML = comissionPercentage.value;
          let cell12 = newRow.insertCell(11);
          cell12.innerHTML = activeFrom.value;
          let cell13 = newRow.insertCell(12);
          cell13.innerHTML = criticalAccount.value;
          let cell14 = newRow.insertCell(13);
          cell14.innerHTML = displayvalue();
          let cell15 = newRow.insertCell(14);
          cell15.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
        }  
        function onEdit() {
            var data = JSON.parse(localStorage.getItem("details"));
            console.log(data[0].username);
            console.log(data.length);
          for (let i = 0; i < data.length; i++)


            selectedRow = data.parentElement.parentElement;
            document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
            document.getElementById("email").value = selectedRow.cells[1].innerHTML;
            document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
            document.getElementById("website").value = selectedRow.cells[3].innerHTML;
            document.getElementById("contactname").value = selectedRow.cells[4].innerHTML;
            document.getElementById("contactphone").value =
              selectedRow.cells[5].innerHTML;
            document.getElementById("contactemail").value =
              selectedRow.cells[6].innerHTML;
            document.getElementById("notes").value = selectedRow.cells[7].innerHTML;
            document.displayRadiovalues().value = selectedRow.cells[8].innerHTML;
            document.displayselectedvalues().value = selectedRow.cells[9].innerHTML;
            document.getElementById("comissionPercentage").value =
              selectedRow.cells[10].innerHTML;
            document.getElementById("activeFrom").value = selectedRow.cells[11].innerHTML;
            document.getElementById("criticalAccount").value =
              selectedRow.cells[12].innerHTML;
            document.displayvalue().value = selectedRow.cells[13].innerHTML;
          }
          function updateRecord(data){
            selectedRow.cells[0].innerHTML=fname.value;
            selectedRow.cells[1].innerHTML=email.value;
            selectedRow.cells[2].innerHTML=phone.value;
            selectedRow.cells[3].innerHTML=website.value;
            selectedRow.cells[4].innerHTML=contactname.value;
            selectedRow.cells[5].innerHTML=contactphone.value;
            selectedRow.cells[6].innerHTML=contactemail.value;
            selectedRow.cells[7].innerHTML=notes.value;
            selectedRow.cells[8].innerHTML=displayRadiovalues();
            selectedRow.cells[9].innerHTML=displayselectedvalues();
            selectedRow.cells[10].innerHTML=comissionPercentage.value;
            selectedRow.cells[11].innerHTML=activeFrom.value;
            selectedRow.cells[12].innerHTML=criticalAccount.value;
            selectedRow.cells[13].innerHTML=displayvalue();
          }
          
          //Delete the data
          function onDelete(td){
            if(confirm('Do you want to delete this record?')){
              row = td.parentElement.parentElement;
              document.getElementById('show').deleteRow(row.rowIndex);
            }
            resetFrom();
          }
          //Reset the data
          function resetFrom(){
            document.getElementById('fname').value= '';
            document.getElementById("email").value= '';
            document.getElementById("phone").value= '';
            document.getElementById("website").value= '';
            document.getElementById("contactname").value= '';
            document.getElementById("contactphone").value= '';
            document.getElementById("contactemail").value= '';
            document.getElementById("notes.value").value= '';
            document.displayRadiovalues()= '';
            document.displayselectedvalues()= '';
            document.getElementById("comissionPercentage").value= '';
            document.getElementById("activeFrom").value= '';
            document.getElementById("criticalAccount").value= '';
            document.innerHTML=displayvalue()= '';
          }
          var editindex = null;
        




    //     <div class="button">
    //       <button type="button" id="myBtn" onclick="session(); AddRow();">
    //         Submit
    //       </button>
    //       <button id="button" type="reset">Reset</button>
    //     </div>
    //   </div>
    // </form>

    // <div>
    //   <table border="3" class="table" id="show">
    //     <tr>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>phone</th>
    //       <th>website</th>
    //       <th>contactname</th>
    //       <th>contactphone</th>
    //       <th>contactemail</th>
    //       <th>Notes</th>
    //       <th>Type</th>
    //       <th>Category</th>
    //       <th>Comission Percentage</th>
    //       <th>Active From</th>
    //       <th>Critical Account</th>
    //       <th>Payment Options</th>
    //     </tr>
    //     <tbody></tbody>
    //   </table>
    // </div>
    // <div id="div1"></div>





//     <div>
//       <table border="3" class="table" id="show">
//         <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>phone</th>
//           <th>website</th>
//           <th>contactname</th>
//           <th>contactphone</th>
//           <th>contactemail</th>
//           <th>Notes</th>
//           <th>Type</th>
//           <th>Category</th>
//           <th>Comission Percentage</th>
//           <th>Active From</th>
//           <th>Critical Account</th>
//           <th>Payment Options</th>
//           <th>Edit</th>
//           <th>Delete</th>
          
//         </tr>
//       </thead>
//         <tbody id="tableData"></tbody>
//       </table>
//     </div>
//     <script src="formscript.js"></script>
//   </body>
// </html>