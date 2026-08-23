const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 50, 50);
ctx.beginPath();

ctx.moveTo(100, 200);
ctx.lineTo(300, 200);

ctx.stroke();
