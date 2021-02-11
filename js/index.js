/* menu */
    const navicon = document.querySelector('.navIcon'); //select the hamburger icon
    const navlinks = document.querySelector('.navLinks');  //select the menu item links 
    navicon.addEventListener('click', function(){
        let value = navlinks.classList.contains('navCollapse'); 
        if (value){
            navlinks.classList.remove('navCollapse');
            navlinks.classList.add('navLinks');

        } else {
            navlinks.classList.add('navCollapse');
            navlinks.classList.remove('navLinks');
  
        }
    })
/* dropdown product info */
const prodinfo = document.querySelector('.prodinfo1'); //select arrow icon
const info  = document.querySelector('.materialinfo'); //select more info
prodinfo.addEventListener('click', function(){
    let value = info.classList.contains('moreinfo');
    if (value) {
        info.classList.remove('moreinfo');
        info.classList.add('collapse');
    } else {
    info.classList.add('moreinfo');
    info.classList.remove('collapse');
}
})
const prodinfo1 = document.querySelector('.prodinfo2'); //select arrow icon
const info1 = document.querySelector('.careinfo'); //select more info
prodinfo1.addEventListener('click', function(){
    let value = info1.classList.contains('moreinfo');
    if (value) {
        info1.classList.remove('moreinfo');
        info1.classList.add('collapse');
    } else {
    info1.classList.add('moreinfo');
    info1.classList.remove('collapse');
}
})
const prodinfo2 = document.querySelector('.prodinfo3'); //select arrow icon
const info2  = document.querySelector('.shipinfo'); //select more info
prodinfo2.addEventListener('click', function(){
    let value = info2.classList.contains('moreinfo');
    if (value) {
        info2.classList.remove('moreinfo');
        info2.classList.add('collapse');
    } else {
    info2.classList.add('moreinfo');
    info2.classList.remove('collapse');
}
})