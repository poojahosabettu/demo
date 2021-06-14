window.onload = function () {
    console.log(window.top);
    fetch('https://resumeuploaderapp.herokuapp.com/getFiles', {
        method: 'GET', // or 'PUT'
    })
        .then(response => response.json())
        .then(data => {
            displayTable(data);
        })
        .catch((error) => {
            document.getElementById('alertonSubmit').style.display = "block";
            document.getElementById('alertonSubmit').innerHTML = '<strong>' + "OOps!!" + '</strong>' + " Something went wrong try again in some time !!"

        });
    function displayTable(files) {
        let table = document.getElementById('tableData');
        if (table) {
            if (files) {
                console.log(files);
                table.style.visibility = "visible";
                document.getElementById('tabletList').style.display = "block";
                let row;
                if (!table.hasChildNodes()) {
                    row = table.insertRow(-1);
                    for (let val of ['Name', 'Job title', 'Notes', 'Resume']) {
                        var headerCell = document.createElement("TH");
                        headerCell.innerHTML = val;
                        row.appendChild(headerCell);
                    }
                }

                for (let i = 0; i < files.length; ++i) {
                    row = table.insertRow(-1);
                    for (let val of ['name', 'jobTitle', 'notes', 'resume']) {
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