class 학급 {
  constructor() {
    this.studentList = [];
  }
  입학하기(학생) {
    this.studentList.push(학생);
  }
  청소시키기() {
    this.studentList.forEach((학생) => 학생.청소());
  }
}

class 학생 {
  constructor(name) {
    this.name = name;
  }
  청소() {
    console.log(`${this.name}~ 청소하겠삼~`);
  }
}

class 창문닦이 extends 학생 {
  constructor(name) {
    super(name);
  }
  청소() {
    console.log(`${this.name}! 창문 닦겠습니다!`);
  }
}

class 바닥닦이 extends 학생 {
  constructor(name) {
    super(name);
  }
  청소() {
    console.log(`${this.name}! 바닥 닦겠습니다!`);
  }
}

class 책상닦이 extends 학생 {
  constructor(name) {
    super(name);
  }
  청소() {
    console.log(`${this.name}! 책상닦겠습니다!`);
  }
}

const 학생1 = new 학생('짱구');
const 학생2 = new 창문닦이('철수');
const 학생3 = new 바닥닦이('맹구');
const 학생4 = new 책상닦이('훈이');

const 우리반 = new 학급();
[학생1, 학생2, 학생3, 학생4].forEach((학생) => {
  우리반.입학하기(학생);
});

우리반.청소시키기();
