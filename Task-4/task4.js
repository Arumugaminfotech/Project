    var checkedValue = [];
    var row;
    var data;

    function getRadioValue(theRadioGroup) {
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }

    function getCheckBox(thisCheckBoxGroup) {
        checkedValue = [];
        var inputElements = document.getElementsByName(thisCheckBoxGroup);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                 checkedValue.push(inputElements[i].value);              
            }

        } return checkedValue;
    }

    function savedata() {

        var nationaldd = document.getElementById("nationlitydd");
         data = {
            "name": document.querySelector('#nametxt').value,
            "gender": getRadioValue('gender'),
            "dob": document.getElementById('dob').value,
            "nationality": nationaldd.options[nationaldd.selectedIndex].text,
            "lang": getCheckBox('lang'),
            "email": document.getElementById('mailtxt').value,
            "degree" : document.getElementById('degree').value,
            "add": document.getElementById('add').value,
        }
        console.log(data);      
        createtablerow();


    }
    function editer() {
        var nationaldd = document.getElementById("nationalitydd");
        data = {
           "name": document.querySelector('#nametxt').value,
           "gender": getRadioValue('gender'),
           "dob": document.getElementById('dob').value,
           "nationality": nationaldd.options[nationaldd.selectedIndex].text,
           "lang": getCheckBox('lang').value,
           "email": document.getElementById('mailtxt').value,
           "degree" : document.getElementById('degree').value,
           "add": document.getElementById('add').value,
       }
       console.log(data);   
       editrow();
    }
    

    function createtablerow() {

        table = document.getElementById('form_result');    
        var columnCount = table.rows[0].cells.length;

         //Add the data rows.
            row = table.insertRow(-1);

            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            var cell5 = row.insertCell(-1);
            var cell6 = row.insertCell(-1);
            var cell7 = row.insertCell(-1);
            var cell8 = row.insertCell(-1);
            var cell9 = row.insertCell(-1);
            

            cell1.innerHTML = data.name;;
            cell2.innerHTML = data.gender
            cell3.innerHTML = data.dob;
            cell4.innerHTML = data.nationality;
            cell5.innerHTML = data.lang;
            cell6.innerHTML = data.email;
            cell7.innerHTML = data.degree;
            cell8.innerHTML = data.add;
           
            cell9.innerHTML = `<a input type="button" onClick="onEdit(this)" style="color:blue;">Edit</a>
                               <a input type="button" onClick="onDelete(this)" style="color:red";">Delete</a>`;
             //here i am adding the row
            table.appendChild(row);


    }
  
    function onEdit(td) {
    if (confirm('Are you sure to edit this Row data ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('form_result').deleteRow(row.rowIndex);
        var nationaldd = document.getElementById("nationlitydd");
         data = {
            "name": document.querySelector('#nametxt').value,
            "gender": getRadioValue('gender'),
            "dob": document.getElementById('dob').value,
            "nationality": nationaldd.options[nationaldd.selectedIndex].text,
            "lang": getCheckBox('lang'),
            "email": document.getElementById('mailtxt').value,
            "degree" : document.getElementById('degree').value,
            "add": document.getElementById('add').value,
        }
        console.log(data);      
        table = document.getElementById('form_result');    
        var columnCount = table.rows[0].cells.length;

         //Add the data rows.
            row = table.insertRow(-1);

            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            var cell5 = row.insertCell(-1);
            var cell6 = row.insertCell(-1);
            var cell7 = row.insertCell(-1);
            var cell8 = row.insertCell(-1);
            var cell9 = row.insertCell(-1);
        cell1.innerHTML = data.name;;
        cell2.innerHTML = data.gender
        cell3.innerHTML = data.dob;
        cell4.innerHTML = data.nationality;
        cell5.innerHTML = data.lang;
        cell6.innerHTML = data.email;
        cell7.innerHTML = data.degree;
        cell8.innerHTML = data.add;
        cell9.innerHTML = `<a input type="button" onClick="onEdit(this)" style="color:blue;">Edit</a>
        <a input type="button" onClick="onDelete(this)" style="color:red";">Delete</a>`;
        table.appendChild(row);
  
    }
}
    function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('form_result').deleteRow(row.rowIndex);
        resetForm();
    }
}
    function edit1(td) {
        row = td.parentElement.parentElement;
        document.getElementById('form_result').deleteRow(row.rowIndex);
        
    }
