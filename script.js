function solveTrinomial() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('solution').innerText = "x = " + x1 + " or x = " + x2;
    } else if (discriminant == 0) {
        var x = -b / (2 * a);
        document.getElementById('solution').innerText = "x = " + x;
    } else {
        document.getElementById('solution').innerText = "No real solutions";
    }
}