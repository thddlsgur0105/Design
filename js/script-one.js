// 해당하는 버튼 클릭하면 관련 색의 디자인 버튼들만 클릭됨

class ActiveCircle {
    constructor({size, color, radius, top, left, text, type}) {
        this.main = document.getElementById("main");
        this.node = document.createElement("button");
        this.node.id = `design__${type}`;
        this.StyleCircle({size, color, radius, top, left, text});
    }
    StyleCircle = ({size, color, radius, top, left, text}) => {
        if (text) {
            this.node.innerHTML = text;
        }
        this.node.style.cssText = `
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
        this.main.appendChild(this.node);
    }
    handleBtnDown = (event) => {
        // Btn Click Down Movement
        const btn = event.target;
        this.btnDownAni(btn);
    }
    handleBtnUp = (event) => {
        // Btn Click Up Movement
        const btn = event.target;
        this.btnUpAni(btn);
    }
    btnDownAni = (btn) => {
        if (btn.classList.contains("up-btn")) {
            btn.classList.replace("up-btn", "down-btn");
        } else {
            btn.classList.add("down-btn");
        }
    }
    btnUpAni = (btn) => {
        if (btn.classList.contains("down-btn")) {
            btn.classList.replace("down-btn", "up-btn");
        }
    }
}

class ActiveForm extends ActiveCircle {
    // Default: Button Design + Extends: Functionality
    constructor(css) {
        super(css)
        // Change Circle into Form 
        this.node.id = "btn";
        this.activateForm();
    }
    activateForm = () => {
        this.node.addEventListener("mousedown", this.handleFormDown);
        this.node.addEventListener("mouseup", this.handleFormUp);
    }
    handleFormDown = (event) => {
        this.handleBtnDown(event);
        const type = event.target.innerHTML;
        const typeBtns = this.main.querySelectorAll(`#design__${type}`);
        typeBtns.forEach(btn => this.btnDownAni(btn))
    }
    handleFormUp = (event) => {
        this.handleBtnUp(event);
        const type = event.target.innerHTML;
        const typeBtns = this.main.querySelectorAll(`#design__${type}`);
        typeBtns.forEach(btn => this.btnUpAni(btn))
    }
}

// CIRCLE AREA

// POWERFUL
const POWERFUL__circle1 = new ActiveCircle({
    size: "50px",
    color: "#30002F",
    radius: "50%",
    top: "50px",
    left: "630px",
    type: "POWERFUL",
});

const POWERFUL__circle2 = new ActiveCircle({
    size: "70px",
    color: "#61002F",
    radius: "50%",
    top: "80px",
    left: "770px",
    type: "POWERFUL",
});

const POWERFUL__circle3 = new ActiveCircle({
    size: "150px",
    color: "#B0002F",
    radius: "50%",
    top: "200px",
    left: "900px",
    type: "POWERFUL",
});

const POWERFUL__circle4 = new ActiveCircle({
    size: "50px",
    color: "#FF202F",
    radius: "50%",
    top: "380px",
    left: "1100px",
    type: "POWERFUL",
});

// COOL
const COOL__circle1 = new ActiveCircle({
    size: "50px",
    color: "#3E48FF",
    radius: "50%",
    top: "100px",
    left: "300px",
    type: "COOL",
});

const COOL__circle2 = new ActiveCircle({
    size: "130px",
    color: "#3969E8",
    radius: "50%",
    top: "100px",
    left: "450px",
    type: "COOL",
});

const COOL__circle3 = new ActiveCircle({
    size: "170px",
    color: "#4BA5FF",
    radius: "50%",
    top: "300px",
    left: "700px",
    type: "COOL",
});

const COOL__circle4 = new ActiveCircle({
    size: "120px",
    color: "#A1FAFF",
    radius: "50%",
    top: "500px",
    left: "1000px",
    type: "COOL",
});

// TRADITIONAL

const TRADITIONAL__circle1 = new ActiveCircle({
    size: "150px",
    color: "#684930",
    radius: "50%",
    top: "250px",
    left: "250px",
    type: "TRADITIONAL",
});

const TRADITIONAL__circle2 = new ActiveCircle({
    size: "110px",
    color: "#97835D",
    radius: "50%",
    top: "370px",
    left: "450px",
    type: "TRADITIONAL",
});

const TRADITIONAL__circle3 = new ActiveCircle({
    size: "80px",
    color: "#F2BE7E",
    radius: "50%",
    top: "510px",
    left: "640px",
    type: "TRADITIONAL",
});

const TRADITIONAL__circle4 = new ActiveCircle({
    size: "100px",
    color: "#CBC69C",
    radius: "50%",
    top: "560px",
    left: "850px",
    type: "TRADITIONAL",
});

// ROMANTIC

const ROMANTIC__circle1 = new ActiveCircle({
    size: "100px",
    color: "#F2CAB3",
    radius: "50%",
    top: "480px",
    left: "180px",
    type: "ROMANTIC",
});

const ROMANTIC__circle2 = new ActiveCircle({
    size: "130px",
    color: "#D98B8B",
    radius: "50%",
    top: "530px",
    left: "340px",
    type: "ROMANTIC",
});

const ROMANTIC__circle3 = new ActiveCircle({
    size: "70px",
    color: "#BF4B75",
    radius: "50%",
    top: "580px",
    left: "530px",
    type: "ROMANTIC",
});

const ROMANTIC__circle4 = new ActiveCircle({
    size: "30px",
    color: "#644073",
    radius: "50%",
    top: "650px",
    left: "670px",
    type: "ROMANTIC",
});

// FORM AREA
const form1 = new ActiveForm({
    size: "100px",
    color: "#ecf0f1",
    radius: "10%",
    top: "10px",
    left: "10px",
    text: "POWERFUL"
});

const form2 = new ActiveForm({
    size: "100px",
    color: "#ecf0f1",
    radius: "10%",
    top: "120px",
    left: "10px",
    text: "COOL"
});

const form3 = new ActiveForm({
    size: "100px",
    color: "#ecf0f1",
    radius: "10%",
    top: "230px",
    left: "10px",
    text: "TRADITIONAL"
});

const form4 = new ActiveForm({
    size: "100px",
    color: "#ecf0f1",
    radius: "10%",
    top: "340px",
    left: "10px",
    text: "ROMANTIC"
});
