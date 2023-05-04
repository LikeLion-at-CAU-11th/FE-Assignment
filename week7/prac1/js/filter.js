function filterData(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        console.log(response);

        {response.filter((datas)=>datas.state=='아기사자').map((data)=>{
            const list = document.createElement('div');
            list.innerHTML=`제 이름은 ${data.name}이고,
            저는 ${data.state}이고, 제가 좋아하는 과일은 ${data.fruit}입니다!`;

            container.appendChild(list);

            console.log(data);
        })}
    })
    .catch((error)=>{
        console.log(error);
        container.innerText='에러에러에러';

    })

}