function radio() {
    let label = document.createElement("label");
    label.innerText = key;
    let input = document.createElement("input");
    input.type = "radio";
    label.appendChild(input);
}


function check() {
    var mycheck = document.getElementbyId("check");
    mycheck.checked = true;
}
