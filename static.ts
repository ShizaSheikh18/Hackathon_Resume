let hidebtn = document.getElementById('hidebtn');

let stillsec = document.getElementById('stillsec')
hidebtn?.addEventListener('click' ,() =>{
if(stillsec.style.display == 'block'){
    stillsec.style.display = 'none';
}else{
    stillsec.style.display='block';
}
})