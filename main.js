function bai1() {
    var output = document.getElementById("bai1_output");
    var i = 0;
    var sum = 0;
    while (sum <= 10000) {
        i++;
        sum += i;
    }
    output.innerHTML = i;
}
function bai2() {
    var x = parseInt(document.getElementById("bai2_input1").value);
    var n = parseInt(document.getElementById("bai2_input2").value);
    var result = 0;
    function luythua(n) {
        return x ** n;
    }
    for (var i = 1; i <= n; i++) {
        result += luythua(i);
    }
    document.getElementById("bai2_output").innerHTML = result;
}
function bai3() {
    var n = parseInt(document.getElementById("bai3_input").value);
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    document.getElementById("bai3_output").innerHTML = result;
}
function bai4() {
    function taoDiv(i) {
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.color = "white";
        div.style.width="100%";
        if (i % 2 == 0) {
            div.style.background = "red";
            div.innerHTML ="Div chẵn "+ i ;
        } else {
            div.style.background = "blue";
            div.innerHTML ="Div lẻ "+ i ;

        }
        document.getElementById("bai4").appendChild(div);
    }
    for (var i = 1; i <= 10; i++) {
        taoDiv(i)
    }
}

