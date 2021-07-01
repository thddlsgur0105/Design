class ActiveCircle {
    constructor(css) {
        this.createCircle(css);
        this.activate();
    }
    createCircle = ({size, color, radius, top, left, text}) => {
        this.main = document.getElementById("main");
        this.circle = document.createElement("button");
        if (text) {
            this.circle.innerHTML = text;
        }
        this.circle.style.cssText = `
            width: ${size};
            height: ${size};
            background-color: ${color};
            border-radius: ${radius};
            top: ${top};
            left: ${left};
            position: absolute;
            box-shadow: 2px 2px 2px 0px #34495e;
            font-size: 10px;
            font-weight: 600;
            color: #2c3e50;
        `
        this.main.appendChild(this.circle);
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
        }
    }
}

// CIRCLE AREA

const circle1 = new ActiveCircle({
    size: "120px",
    color: "#A1FAFF",
    radius: "50%",
    top: "500px",
    left: "1000px",
});

const circle2 = new ActiveCircle({
    size: "170px",
    color: "#4BA5FF",
    radius: "50%",
    top: "300px",
    left: "700px",
});

const circle3 = new ActiveCircle({
    size: "50px",
    color: "#3E48FF",
    radius: "50%",
    top: "100px",
    left: "300px",
});

const circle4 = new ActiveCircle({
    size: "130px",
    color: "#3969E8",
    radius: "50%",
    top: "100px",
    left: "450px",
});

// FORM AREA

const form1 = new ActiveCircle({
    size: "100px",
    color: "#ecf0f1",
    radius: "10%",
    top: "10px",
    left: "10px",
    text: "POWERFUL"
});

const form2 = new ActiveCircle({
    size: "100px",
    color: "#ecf0f1",
    radius: "10%",
    top: "120px",
    left: "10px",
    text: "COOL"
});