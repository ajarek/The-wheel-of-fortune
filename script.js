const circle = document.querySelector('.circle')
const result = document.querySelector('#result')
const text = [...document.querySelectorAll('.text')]
const btn = document.querySelector('.btn')

function rotate(){
  
    const random =Math.floor(Math.random()*7200);
   
    circle.style.transform = `rotate(${random}deg)`
    function displayResult(){
     if(random%360 > 0 && random%360 <=30){result.innerHTML=text[8].textContent}
     if(random%360 > 30 && random%360 <=60){result.innerHTML=text[7].textContent}
     if(random%360 > 60 && random%360 <=90){result.innerHTML=text[6].textContent}
     if(random%360 > 90 && random%360 <=120){result.innerHTML=text[5].textContent}
     if(random%360 > 120 && random%360 <=150){result.innerHTML=text[4].textContent}
     if(random%360 > 150 && random%360 <=180){result.innerHTML=text[3].textContent}
     if(random%360 > 180 && random%360 <=210){result.innerHTML=text[2].textContent}
     if(random%360 > 210 && random%360 <=240){result.innerHTML=text[1].textContent}
     if(random%360 > 240 && random%360 <=270){result.innerHTML=text[0].textContent}
     if(random%360 > 270 && random%360 <=300){result.innerHTML=text[11].textContent}
     if(random%360 > 300 && random%360 <=330){result.innerHTML=text[10].textContent}
     if(random%360 > 330 && random%360 <=180){result.innerHTML=text[9].textContent}
    }

    setTimeout(displayResult,5000)

}

circle.addEventListener('click',rotate)

function editText(e){
    e.preventDefault()
    const inputs = document.querySelectorAll('.col-3 input')
    const arrInputs=[]
    const texty = [...document.querySelectorAll('.text div')]
    inputs.forEach(inp=>{
        arrInputs.push(inp.value)
    })
   
        for(let i=0;i<inputs.length;i++){

          texty[i].innerHTML=arrInputs[i] 
        }
    
}
btn.addEventListener('click',editText)


