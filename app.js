const n = 5;// for loop example

for (let i = 1; i <= n; i++) {
    console.log('This is my for Loop example.');
}

let count = 1;        // while loop example
while (count < 10) {
    console.log(count);
    count +=2;
}



const div = document.getElementById("container"); //change CSS with JS
div.style.color = "darkblue";



let price = "SOLD OUT";  // change CSS based upon a variable value
document.getElementById("demo").innerHTML = price;
demo.style.color = "red";
