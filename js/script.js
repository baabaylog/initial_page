
document.querySelectorAll('.menu-items ul li').forEach((val, index, elemets)=>{
    val.addEventListener('click', function (){
        for (let i = 0; i < elemets.length; i++) {
            const ele = elemets[i];
            ele.classList.remove('active')
        }
        val.classList.add('active')
        if(val.dataset.value && val.dataset.value == 'dashboard'){
            document.querySelector('.dashboard').classList.remove('hide');
        }else{
            document.querySelector('.dashboard').classList.add('hide');
        }
    })

});