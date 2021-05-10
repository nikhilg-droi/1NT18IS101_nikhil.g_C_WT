function Arrays_sum(array1, array2) {
    var result = [];
    var ctr = 0;
    var x = 0;
    if (array1.length === 0)
        return "array1 is empty";
    if (array2.length === 0)
        return "array2 is empty";
    while (ctr < array1.length && ctr < array2.length) {
        result.push(array1[ctr] + array2[ctr]);
        ctr++;
    }
    if (ctr === array1.length) {
        for (x = ctr; x < array2.length; x++) {
            result.push(array2[x]);
        }
    }
    else {
        for (x = ctr; x < array1.length; x++) {
            result.push(array1[x]);
        }
    }
    return result;
}

document.getElementById("i1").innerHTML = Arrays_sum([2, 0, 3, 3, 4], [3, 4, 6, 6, 3, 1]);

function leap_year_range() {
    st_year = prompt("enter start year");
    end_year = prompt("enter ending year");
    var year_range = [];
    for (var i = st_year; i <= end_year; i++) {
        year_range.push(i);
    }
    var new_array = [];
    year_range.forEach(
        function (year) {
            if (test_LeapYear(year))
                new_array.push(year);
        });
    document.getElementById("i2").innerHTML = new_array;
}
function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

var array = [1, 2, 3, 4, 5, 6],s = 0,p = 1,i;
for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}

document.getElementById("i3").innerHTML = 'Sum : ' + s + ' Product : ' + p;
protect_email = function () {
    user_email = prompt("enter email");
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    document.getElementById("i4").innerHTML = part1 + "...@" + part2;
};

capitalize = function () {
    str1 = prompt("Enter the string");
    document.getElementById("i5").innerHTML = str1.charAt(0).toUpperCase() + str1.slice(1);
}

function prime() {
    num = prompt("Enter the range to display");
    prime1 = new Array;
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
    document.getElementById("i6").innerHTML = prime1;
}

function min_sec() {
    min = prompt("Enter minutes");
    document.getElementById("i7").innerHTML = min * 60 + " Seconds....";
}



function wins() {
    win = prompt("enter wins");
    draw = prompt("enter draws");
    loss = prompt("enter loss");
    document.getElementById("i8").innerHTML = (win * 3) + (draw * 1) + (loss * 0) + " points";
}


function tens() {
    a = Number(prompt("enter 1st number"));
    b = Number(prompt("enter 2nd number"));
    if (a == 10 || b == 10 || a + b == 10) {
        document.getElementById("i9").innerHTML = "Makes ten--->true";
    } else {
        document.getElementById("i9").innerHTML = "Doesnt make ten----->false";
    }
}


function stringint(a) {
    return parseInt(a);
}
document.getElementById("i10").innerHTML = "6->  " + stringint("6");

function reversee(ar1) {
    for (i = 0; i < ar1.length / 2; i++) {
        temp = ar1[i];
        ar1[i] = ar1[ar1.length - 1 - i];
        ar1[ar1.length - 1 - i] = temp;
    }
    return ar1;
}
document.getElementById("i11").innerHTML = reversee([9, 9, 2, 3, 4]);
function stringfield(ar2) {
    for (i = 0; i < ar2.length; i++)
        ar2[i] = Number(ar2[i]);
    return ar2;
}
document.getElementById("i12").innerHTML = stringfield(["1", "3", "3.6"]);
