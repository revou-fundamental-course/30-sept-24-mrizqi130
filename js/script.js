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

function toCelcius() {
    console.log("tocelsi")
    let details = `<h2>Cara Konversi Dari Fahrenheit (&degF) ke Celcius (&degC)</h2>\n
<hr>
<p>Suhu S dalam derajat Celcius (&degC) sama dengan suhu S dalam derajat Fahrenheit (&degF) kurang 32 kali 9/5.</p>
<p>S<sub>(&degC)</sub>=(S<sub>(&degF)</sub>- 32) x 5/9 <br> atau <br> S<sub>(&degC)</sub>=(S<sub>(&degF)</sub>- 32) x 1.8 </p>`
    let celsi = document.getElementById("div1").innerHTML
    let fahren = document.getElementById("div2").innerHTML
    document.getElementById("div1").innerHTML = fahren;
    document.getElementById("div2").innerHTML = celsi;
    document.getElementById("suhu1").disabled = true;
    document.getElementById("suhu2").disabled = false;
    document.getElementById("details").innerHTML = details;
}

function toFahrenheit() {
    console.log("tofahren")
    let details = `<h2>Cara Konversi Dari Celcius (&degC) ke Fahrenheit (&degF)</h2>\n
<hr>
<p>Suhu S dalam derajat Fahrenheit (&degF) sama dengan suhu S dalam derajat Celsius (&degC) kali 9/5 tambah
    32.</p>
<p>S<sub>(&degF)</sub>=(S<sub>(&degC)</sub>x 9/5) + 32 <br> atau <br> S<sub>(&degF)</sub>=(S<sub>(&degC)</sub>x 1.8) + 32 </p>`
    let fahren = document.getElementById("div1").innerHTML
    let celsi = document.getElementById("div2").innerHTML
    // fahren to celsi
    document.getElementById("div1").innerHTML = celsi;
    document.getElementById("div2").innerHTML = fahren;
    document.getElementById("suhu1").disabled = false;
    document.getElementById("suhu2").disabled = true;
    document.getElementById("details").innerHTML = details;

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
    console.log(state)
    reset_()
    if (state) {
        toFahrenheit();
        state = false;
    } else {
        toCelcius();
        state = true;
    }
}   