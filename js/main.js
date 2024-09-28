let darkModBtn=document.getElementById('darkModBtn')
let lightModBtn=document.getElementById('lightModBtn')
function setDark(){
    darkModBtn.classList.add('active')
    lightModBtn.classList.remove('active')
    document.documentElement.setAttribute('data-bs-theme','dark')
}
function setLight(){
    lightModBtn.classList.add('active')
    darkModBtn.classList.remove('active')
    document.documentElement.setAttribute('data-bs-theme','light')
}
window.onload=function (){
    let pageTheme=localStorage.getItem('theme')
    if (pageTheme!=null){
        if (pageTheme=='dark'){
            setDark()
        } else {
            setLight()
        }
    }

}
darkModBtn.addEventListener('click',function (){
    setDark()
    localStorage.setItem('theme','dark')
})
lightModBtn.addEventListener('click',function (){
    setLight()
    localStorage.setItem('theme','light')
})