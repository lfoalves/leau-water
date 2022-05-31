revert.onclick = () => {
    modal.classList.add('open');
    const open = document.getElementById('modal');
    console.log(open)
}

set.onclick = () => {
    modal.classList.add('open');
}

water.onclick = () => {
    water.classList.toggle('moviment');
}

cCancel.onclick = () => {
    modal.classList.remove('open');
    
}