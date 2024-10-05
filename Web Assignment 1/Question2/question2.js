var submit = document.getElementById("submitButton");
if (submit)
{
    submit.addEventListener("click", addData);
}

function addData(){
    //NEEDS TO COLLECT ALL DATA HERE, CAN TRAVERSE ALL ELEMENTS
    var textElements = document.getElementsByTagName("input");
    var canProceed = true;

    for (var j = 0; j < textElements.length; j++)
    {
        if (textElements[j].value === null || textElements[j].value === undefined || textElements[j].value.trim() === "")
            canProceed = false;
    }

    // var lastCheckbox1 = textElements[textElements.length - 2];
    // var lastCheckbox2 = textElements[textElements.length - 1];

    // // Check if the last two checkboxes are checked
    // if (lastCheckbox1.checked && lastCheckbox2.checked) {
    //   // Both checkboxes are checked
    //   console.log("Both checkboxes are checked.");
    // } else {
    //   // At least one checkbox is unchecked
    //   console.log("At least one checkbox is unchecked.");
    // }

    // console.log(textElements[textElements.length-1].value);
    
    if (!textElements[textElements.length - 1].checked || !textElements[textElements.length - 2].checked)
    {
        canProceed = false;
    }
    if (canProceed)
    {
        //now store everything in an object or array?
        var application = Array.from(textElements);

        var newRow = document.createElement("tr");

        var outputTable = document.getElementById("applicationTable");
        outputTable.appendChild(newRow);
        var newRowContents = [];
        var newContent;
        
        for (var j = 0; j < textElements.length - 2; j++)
        {
            newContent = document.createElement("td");
            newContent.value = textElements[j].value;
            newContent.textContent = textElements[j].value;
            if (j == 0 || j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 11 || j == 12 || j == 13)
            newRowContents.push(newContent);
        }

        console.log(newRowContents);


        for (var j = 0; j < newRowContents.length; j++)
        {
            newRow.appendChild(newRowContents[j]);
        }

        // var encodedData = encodeURIComponent(JSON.stringify(newRow));
        // var url = "question2table.html?data=" + encodedData;
        // window.location.href = url;

//        console.log(newRow);
//        outputTable.appendChild(newRow);

        // for (var i = 0; i < textElements.length; i++) {
        //     if (textElements[i].value !== null && textElements[i].value !== undefined && textElements[i].value.trim() !== "")  console.log("Input " + (i + 1) + ": " + textElements[i].value);
        // }    
    }
}
