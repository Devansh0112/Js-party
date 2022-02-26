// change font color also as per the contrast of background color
const colors = ['red', 'blue', 'green', 'yellow'];

const changeColor = () => {
    let index = Math.floor(Math.random() * 3);
    console.log(colors[index]);
    document.querySelector('body').style.backgroundColor = colors[index];
}