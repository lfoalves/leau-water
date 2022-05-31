// window.document.body.style.background = '#000'

revert.onclick = () => {
    window.alert('Revert')
    revert.style.backgroundColor = 'red';
}

set.onclick = () => {
    window.alert('Alterar');
}

water.onclick = () => {
    // water.style.backgroundColor = 'green';
    water.classList.toggle('animation');
}