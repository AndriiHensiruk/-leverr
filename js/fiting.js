const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const ft = new Image();
const bg = new Image();

ft.src="img/ken.png";
bg.src="img/kombat.jpg";

function draw() {
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(ft, 200, 80);
}
let game = setInterval(draw,100);