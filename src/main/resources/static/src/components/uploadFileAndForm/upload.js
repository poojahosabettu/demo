let files = []

window.onload = function () {
    console.log(document.getElementById('alertonSubmit'));
    // document.getElementById('tabletList').style.display = "none";
    document.getElementById('form-inline').style.display = "none";
    document.getElementById('alertonSubmit').style.display = "none";
    document.getElementById('uploadedFile').addEventListener('change', handleFileSelect, false);
    document.getElementById("uploadButton").addEventListener("click", function () {
        if (files.length > 0) {
            document.getElementById('form-inline').style.display = "block";
            document.getElementById('alertonSubmit').style.display = "none";
        } else {
            document.getElementById('alertonSubmit').style.display = "block";
            document.getElementById('alertonSubmit').innerHTML = '<strong>' + "OOps!!" + '</strong>' + " No File to upload!!"
        }

        setTimeout(() => {
            document.getElementById('alertonSubmit').style.display = "none";
        }, 6000);

    });
    document.getElementById("submitButton").addEventListener("click", submitAction);
    function handleFileSelect(event) {
        console.log(event.target.value);
        const reader = new FileReader()
        reader.onload = handleFileLoad;
        reader.readAsText(event.target.files[0]);
        console.log(event.target.files);
        if (event.target.files.length == 0) {
            document.getElementById('alertonSubmit').style.display = "block";
            document.getElementById('alertonSubmit').innerHTML = '<strong>' + "OOps!!" + '</strong>' + " Something went wrong try again in some time !!"
            return;
        }
        files = [];

        for (let i = 0; i < event.target.files.length; ++i) {
            console.log(event.target.files[i]);
            let file = event.target.files[i];
            let filePath = "051453350433_ClaimForm.pdf";
            let newFile = {};
            for (let val in file) {
                newFile[val] = file[val];
            }
            newFile['fullPath'] = filePath;
            files.push(newFile);
        }
        displayTable(files);
    }

    function handleFileLoad(event) {
        var content = document.getElementById('fileContent');
    }

    function submitAction(event) {
        console.log(files);

        if (files.length > 0) {
            /*(async () => {
                 const rawResponse = await fetch('http://localhost:8080/uploadFiles', {
                     method: 'POST',
                     headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({
                         userName: 'PoojaDev', candidateProfile: {
                             name: document.getElementById('candidateName').value,
                             jobTitle: document.getElementById('candidateTitle').value,
                             notes: document.getElementById('candidateNotes').value,
                             resume: files[0].name
                         }
                     })
                 }).then(data => {
                     console.log(data);
                     document.getElementById('alertonSubmit').style.display = "block";
                     document.getElementById('alertonSubmit').innerHTML = '<strong>' + "Holy guacamole!" + '</strong>' + " You successfully submitted " + files.length + " files !!"
                 }).catch(function (error) {
                     console.log(error);
                     document.getElementById('alertonSubmit').style.display = "block";
                     document.getElementById('alertonSubmit').innerHTML = '<strong>' + "OOps!!" + '</strong>' + " Something went wrong try again in some time !!"
                 });
                 console.log(rawResponse);
                 const content = rawResponse.json();
                 console.log(content);
             })();*/

            fetch('/uploadFiles', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: 'PoojaDev', candidateProfile: {
                        name: document.getElementById('candidateName').value,
                        jobTitle: document.getElementById('candidateTitle').value,
                        notes: document.getElementById('candidateNotes').value,
                        resume: files[0].name
                    }
                }),
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementById('alertonSubmit').style.display = "block";
                    document.getElementById('alertonSubmit').innerHTML = '<strong>' + "Holy guacamole!" + '</strong>' + data.response

                    console.log('Success:', data);
                })
                .catch((error) => {
                    document.getElementById('alertonSubmit').style.display = "block";
                    document.getElementById('alertonSubmit').innerHTML = '<strong>' + "OOps!!" + '</strong>' + " Something went wrong try again in some time !!"

                });
        } else {
            document.getElementById('alertonSubmit').style.display = "block";
            document.getElementById('alertonSubmit').innerHTML = '<strong>' + "Submit failed " + '</strong>' + " files are being uploaded !!"
        }
        setTimeout(() => {
            document.getElementById('alertonSubmit').style.display = "none";
        }, 6000);

    }

    function displayTable(files) {
        let table = document.getElementById('tableData');
        if (table) {
            if (files) {
                console.log(table);
                table.style.visibility = "visible";
                document.getElementById('tabletList').style.display = "block";
                let row;
                if (!table.hasChildNodes()) {
                    row = table.insertRow(-1);
                    for (let val of ['Name', 'type']) {
                        var headerCell = document.createElement("TH");
                        headerCell.innerHTML = val;
                        row.appendChild(headerCell);
                    }
                }

                for (let i = 0; i < files.length; ++i) {
                    row = table.insertRow(-1);
                    for (let val of ['name', 'fullPath']) {
                        /*let td = document.createElement('td');
                        let text1 = document.createTextNode(files[i][val]);
                        td.appendChild(text1);
                        tr.appendChild(td);*/


                        var cell = row.insertCell(-1);
                        cell.innerHTML = files[i][val];
                    }
                }
            }
            else {
                table.style.visibility = "hidden";
            }
            console.log(table)
        }
    }

}


