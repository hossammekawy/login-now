let yes =document.getElementById('yes')
let no =document.getElementById('no')
let body =document.getElementById('body')
let HI =document.getElementById('HI')
let log = document.getElementById('log')
let social =document.getElementById('so')
let b =document.getElementById('bbb')
yes.onclick=function(){
    body.style.backgroundImage='url(log.jpg)'
    yes.style.display='none'
    no.style.display='none'
    HI.style.display='none'
    b.style.display='block'
    social.style.display='block'
    log.style.display='block'
    if(backgroundImage='url(to.jpg)'){
        body.style.backgroundImage='url(lap.jpg)'
    }else{
        body.style.backgroundImage='url(log.jpg)'
    }

}