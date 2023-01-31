let inputTxt = document.getElementById("inputTxt");
let outputTxt = document.getElementById("outputTxt");
let truncateBtn = document.getElementById("truncateBtn");
let copyBtn = document.getElementById("copyTxtBtn");

truncateBtn.addEventListener("click", () => {
    let len = parseInt(document.getElementById("len").value);
    if (len) { // IF LENGHT IS NOT EMPTY
        if (len > 0 && inputTxt.value.length > len) { // VALIDATE INPUT LENGTH AND INPUT TEXT
            outputTxt.value = inputTxt.value.slice(0,len); // IF VALIDATE
        } else {
            outputTxt.value = inputTxt.value; // IF NOT VALID
        }
    } else { // IF INPUT LENGTH IS EMPTY
        outputTxt.value = "";
        alert("Please fill the length input");
    }
});
// COPY BUTTON
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${outputTxt.value}`);
})
