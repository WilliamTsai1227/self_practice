function getData(){
    //利用fetch連線並取得資料
    fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then(function(response){
        return response.json();
    }).then(function(data){
        //已經取的資料，要把資料呈現到畫面上
        //let result = document.querySelector(".body")
        //result.innerHTML = "";   //每次點按時便先把畫面清空
        for(let i = 0;i <= 9;i++){
            let site = data.result.results[i];
            let textBlockDiv = document.querySelector(".text_block"+(i+1)); //取得text_block 這個div
            let picBlockDiv = document.querySelector(".pic_block"+(i+1)); //取得pic_block 這個div
            let creatTextEle = document.createElement("div"); //做一個text div
            creatTextEle.textContent = site.stitle; //在做好的text div新增文字
            creatTextEle.classList.add("text");//在做好的text div新增class & class name
            textBlockDiv.appendChild(creatTextEle);//將做好的text div新增到text_block 這個div中
            let creatImgEle = document.createElement("img"); //做一個img 
            creatImgEle.classList.add("big_img");//在做好的img div新增class & class name
            creatImgEle.src = site.file; // 在做好的img div新增圖片網址
            picBlockDiv.appendChild(creatImgEle);
            //result.innerHTML +="<div>"+site.stitle+"</div>"
            //console.log(site);  //印出第一個site全部資訊
            //console.log(site.stitle);//印出第一個site的地點資訊（site.stitle = 地點資訊）
        };
    });   
}

function getTextEle(){
    for(let i =1;i<=10;i++){
        let ele = document.querySelector(".text_block"+i);
        let creatEle = document.createElement("div");
        creatEle.textContent = "景點"+i;
        ele.appendChild(creatEle);
    }
    
}
getData();

