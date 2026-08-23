console.log("JavaScript funcionando");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 5
};

ctx.fillStyle = "red";

function drawPlayer() {
    ctx.fillStyle = "blue";

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

function mov() {

    if (keys["w"]) {
        player.y -= player.speed;
    }

    if (keys["s"]) {
        player.y += player.speed;
    }

    if (keys["a"]) {
        player.x -= player.speed;
    }

    if (keys["d"]) {
        player.x += player.speed;
    }
}
const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function update() {
  drawPlayer()
    mov()
  update()
}

update()
