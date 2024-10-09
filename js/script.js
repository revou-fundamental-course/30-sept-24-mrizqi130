let state = false;
function konversi() {
    if (state) {
        let fahren = parseInt(document.getElementById("suhu2").value);
        let celsi = (fahren - 32) * 5 / 9;
        // console.log(celsi);
        document.getElementById("suhu1").value = celsi.toFixed(2);
        document.getElementById("kalkulasi").value = "(" + fahren + "\u00B0F - 32) * 5 / 9 = " + celsi.toFixed(2) + "\u00B0C";
        console.log("gg")
    } else {
        let celsi = parseInt(document.getElementById("suhu1").value);
        let fahren = celsi * (9 / 5) + 32;
        // console.log(celsi);
        document.getElementById("suhu2").value = fahren.toFixed(2);
        document.getElementById("kalkulasi").value = celsi + "\u00B0C * ( 9 / 5) + 32 = " + fahren.toFixed(2) + "\u00B0F";
        console.log("ggw")
    }
}
function reset_() {
    // location.reload()
    // console.log()
    var input = document.getElementsByClassName("box");
    // console.log(textarea.length)
    for (var i = 0; i < input.length; i++) {
        // console.log()
        input[i].value = ""
    }
}
function reverse() {
    // alert("reverse");
    reset_()
    if (state) {
        let fahren = document.getElementById("div1").innerHTML
        let celsi = document.getElementById("div2").innerHTML
        // fahren to celsi
        document.getElementById("div1").innerHTML = celsi;
        document.getElementById("div2").innerHTML = fahren;
        document.getElementById("suhu1").disabled = false;
        document.getElementById("suhu2").disabled = true;
        state = false;
    } else {
        // celsi to fahren
        let celsi = document.getElementById("div1").innerHTML
        let fahren = document.getElementById("div2").innerHTML
        document.getElementById("div1").innerHTML = fahren;
        document.getElementById("div2").innerHTML = celsi;
        document.getElementById("suhu1").disabled = true;
        document.getElementById("suhu2").disabled = false;
        state = true;
    }
}   