// alert('long test toggle')
//author: duclong09
const topMenu = document.getElementById('dlg-top-menu')
const toggleMenu =  document.getElementById('dlg-toggle__icon')
document.addEventListener('click', (e)=>{
    if(toggleMenu.contains(e.target)){
        //click toggle:
        topMenu.classList.toggle('dlg-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    }else{
        //click outside from template
        if(topMenu.classList.contains('dlg-topmenu-expanded')){
            topMenu.classList.remove('dlg-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})