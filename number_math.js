function sqrt() {
    x = Number(prompt("Enter a number"))
    y = Math.floor(Math.sqrt(x))

    alert("sqrt of "+x+" "+y)

}

function prime() {
    prime1 = new Array;

    let num = parseInt(prompt("Enter a number"))
    for (let i = 0; i <= num; i++) {
        flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }

        }
        if (i > 1 && flag == 0) {
            prime1.push(i);
        }
    }
    alert("prime numbers till"+num+"are"+prime1);
}

function mint() {
    min = parseInt(prompt("Enter minutes"));
    seconds = min * 60;
    alert(seconds.toString() + ' secs');
}

function wins() {
    win = parseInt(prompt("Enter wins"));
    loss = parseInt(prompt("Enter losses"));
    draw = parseInt(prompt("Enter draw"));
    points = (win * 3) + (draw * 1) + (loss * 0);
    alert(points.toString() + " points");
}

function tens() {
    a = parseInt(prompt("Enter a number"));
    b = parseInt(prompt("Enter second number"));
   b = parseInt(prompt("Enter second number"));
    if (a == 10 || b == 10 || a + b == 10) {
        alert("Makes ten");
    } else {
        alert("Doesnt make ten");
    }
}

function mathall() {
    num = parseInt(prompt("Enter a number"));
    num1 = parseInt(prompt("Enter second number"));
    document.getElementById("pi").innerHTML = "Pi=" + Math.PI;
    document.getElementById("round").innerHTML = "Round=" + Math.round(num);
    document.getElementById("ceil").innerHTML = "Ceil=" + Math.ceil(num);
    document.getElementById("floor").innerHTML = "Floor=" + Math.floor(num);
    document.getElementById("trunc").innerHTML = "Trunc=" + Math.trunc(num);
    document.getElementById("sin").innerHTML = "Sin=" + Math.sin(num);
    document.getElementById("pow").innerHTML = "Pow x to y=" + Math.pow(num, num1);
    document.getElementById("abs").innerHTML = "Abs=" + Math.abs(num);
    document.getElementById("random").innerHTML = "Random=" + Math.random() * num;
    document.getElementById("min").innerHTML = "Min=" + Math.min(num, num1);
    document.getElementById("log").innerHTML = "Log=" + Math.log(num);
}
