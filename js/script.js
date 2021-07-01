class ActiveCircle {
    constructor({size, color, radius, top, left}) {
        this.circle = document.querySelector("#jsCircle");
        this.circle.style.width = size;
        this.circle.style.height = size;
        this.circle.style.backgroundColor = color;
        this.circle.style.borderRadius = radius;
        this.circle.style.top = top;
        this.circle.style.left = left;
        this.activate();
    }
    activate = () => {
        this.circle.addEventListener("mousedown", this.handleBtnDown);
        this.circle.addEventListener("mouseup", this.handleBtnUp);
    }
    handleBtnDown = (event) => {
        // Btn Click Down Movement
        const btn = event.target;
        if (btn.classList.contains("up-btn")) {
            btn.classList.replace("up-btn", "down-btn");
        } else {
            btn.classList.add("down-btn");
        }
    }
    handleBtnUp = (event) => {
        // Btn Click Up Movement
        const btn = event.target;
        if (btn.classList.contains("down-btn")) {
            btn.classList.replace("down-btn", "up-btn");
            
            // Create continuously expanding Circle
            this.createCircle(event)
        }
    }
    createCircle = (event) => {
        const x = event.target.offsetLeft + 50;
        const y = event.target.offsetTop + 50;
        console.log(x, y)
        this.createElement()
    }
    createElement(element, css) {
        const newElement = document.createElement(element);
    }
}

const circle = new ActiveCircle({
    size: "120px",
    color: "#2ecc71",
    radius: "50%",
    top: "500px",
    left: "1000px",
});