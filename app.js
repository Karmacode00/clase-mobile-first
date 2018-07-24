function toggleMenu () {
  if(sideMenu.className.indexOf('d-none') >= 0){
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu () {
  sideMenu.classList.remove('d-none');
}

function closeMenu () {
  sideMenu.classList.add('d-none');
}