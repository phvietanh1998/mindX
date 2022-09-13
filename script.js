/*
function findOppositeNumber (n,inputNumber)
{
    if (inputNumber > n/2)
        return (inputNumber-parseInt(n/2));
    return (inputNumber+parseInt(n/2));
}

console.log(findOppositeNumber(10,2));
 */

/*

function merge2String(str1,str2)
{
    var a=str1.split("");
    var b=str2.split("");
    var merge='';
    for (var i=0;i<a.length||i<b.length;i++)
    {
        if(i < a.length)  //if i is less than a.length add a[i] to string first.
            merge +=  a[i];
        if(i < b.length)  //if i is less than b.length add b[i] to string.
            merge +=  b[i];
    }
    return merge;
}
console.log(merge2String('abc','123'));
console.log(merge2String('abc','0123'));
console.log(merge2String('abcd','123'));
*/

/*var random = Math.floor(Math.random()*10)+1;
function myFunction() {
    var n=3;
    for (var i=0;i<n;i++)
    {
        alert(parseInt(document.getElementById("inputText").value));

        if (random===parseInt(document.getElementById("inputText").value))
        {
            document.getElementById("change").innerHTML = "Chuc mung ban da trung thuong!";
            alert("Chuc mung ban da trung thuong");
            break;
        }
        else {
            alert(i+100);
            document.getElementById("change").innerHTML = "Ban con "+i+" lan thu";
            continue;
        }
    }
}*/
var random = Math.floor(Math.random()*10)+1;
console.log(random);
var count=0;

document.getElementById("btn").addEventListener("click", function e(){ 
    count++;
    if (count <=3)
    {
        if (random===parseInt(document.getElementById("inputText").value))
        {
            document.getElementById("change").innerHTML = "Chuc mung ban da trung thuong!";
            alert("Chuc mung ban da trung thuong");
            document.getElementById("btn").removeEventListener("click",e);

        }
        else {
            alert("Ban da nhap sai. Xin moi ban nhap lai!");
            var s="Ban con " + parseInt(3-count) + " lan";
            document.getElementById("change").innerHTML = s;
            document.getElementById("inputText").value="";
        }  
    }
    else {
        alert("Chuc ban may man lan sau");
        document.getElementById("change").innerHTML = "Chuc ban may man lan sau";
        document.getElementById("btn").removeEventListener("click",e);

    }
});




