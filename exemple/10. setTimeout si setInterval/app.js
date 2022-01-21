setTimeout(() => {
    document.body.style.backgroundColor = "orange";
}, 3000);


const colors = ["red", "green", "blue", "yellow", "black", "cyan"];
let curentColor = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[curentColor];
    if(curentColor < colors.length){
        curentColor++;
    }else {
        curentColor = 0;
    }
}, 10);