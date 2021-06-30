// Btn click -> 물결파 생성
// 가상의 원 -> 시간이 지남에 따라 반지름 커지는 컨셉 ?

class ActiveCircle {
    constructor() {
        this.circle = document.querySelector("#jsCircle");
        this.activate();
    }
    activate = () => {
        console.log(this)
    }
}

const circle = new ActiveCircle();