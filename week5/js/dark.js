darkBtn = document.getElementById('darkmode-button');
darkBtn.addEventListener('click', darkMode);

function addClass(e){
    e.classList.add('dark');
}

function removeClass(e){
    e.classList.remove('dark');
}

function darkMode(e){
    // toggle = class가 존재하는 경우 class를 제거하고, 그렇지 않은 경우엔 추가 해주는 메서드
    // 다크모드 버튼의 상태를 관리해주는 코드
    let isActive = darkBtn.classList.toggle('active');


    //다크모드를 적용할 요소들(elements) querySelectorAll로 모두 선택
    const objToChange = document.querySelectorAll(".change");


    console.log(document.getElementsByClassName("change"));
    console.log(objToChange);
    

    //예외적인 스타일링이 필요한 요소들 
    const displayTitle = document.querySelectorAll("#display-title");
    const darkReverse = document.querySelector(".change-reverse");


    if (isActive){
        objToChange.forEach(addClass);

        displayTitle[0].classList.add('dark-border-bottom');
        displayTitle[1].classList.add('dark-border-bottom');
        darkReverse.classList.add('dark-reverse');
    }

    else{
        objToChange.forEach(removeClass);
        displayTitle[0].classList.remove('dark-border-bottom');
        displayTitle[1].classList.remove('dark-border-bottom');
        darkReverse.classList.remove('dark-reverse');
    }


}