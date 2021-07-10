const tutorial = document.getElementById("tutorial");
if (tutorial.getContext) {
    const ctx = tutorial.getContext("2d");
    // drawing code here
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100)
} else {
    // canvas unsupported code here
}
