console.log('我是main.js111')
let n=1;
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET",`/page${n+1}`)
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item.id;
              xxx.appendChild(li);
            });
            n+=1
          }
        };
    request.send()
}



getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET","5.json")
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status ===200){
            console.log(request.response)
            const object=JSON.parse(request.response)
            console.log(object)
            myName.textContent=object.name
        }
    }
    request.send()
}



getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET","4.xml")
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status ===200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}


getJS.onclick=()=>{
    const request = new XMLHttpRequest()
request.open('GET','/2.js')
request.onload=()=>{
    const script=document.createElement('script')//创建script标签
    script.innerHTML=request.response//填写内容
    document.head.appendChild(script)

}
request.onerror=()=>{}
request.send()
}

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
request.open('GET','/3.html')
request.onload=()=>{
    const div=document.createElement('div')//创建div标签
    div.innerHTML=request.response//填写内容
    document.body.appendChild(div)
}
request.onerror=()=>{}
request.send()
}


getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if(request.readyState===4){
          if(request.status>=200 && request.status<300){        
              const style= document.createElement('style')//创建style标签
          style.innerHTML=request.response//填写style
          document.head.appendChild(style)//插入头}
    }else{
        alert('加载CSS失败')
    }
        }
    }
    request.send()

} 
