const load = () => {
    const tutorial = document.getElementById("tutorial");
    if (tutorial.getContext) {
        const ctx = tutorial.getContext("2d");
        // drawing code here
        ctx.fillStyle = "green";

        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath()
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();

    } else {
        // canvas unsupported code here
    }
}

window.onload = load;