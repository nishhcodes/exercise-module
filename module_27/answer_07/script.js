function showDropDownMenu () {
    const submenu = document.querySelector('.hidden');
    submenu.style.display = 'block';
}

function hideDropDownMenu() {
    const submenu = document.querySelector('.hidden');
    submenu.style.display = 'none';
}

document.querySelector('.show').addEventListener('mouseover', showDropDownMenu);
document.querySelector('.show').addEventListener('mouseout', hideDropDownMenu);
