const modalTitle = document.querySelector('#modal h2');

revert.onclick = () => {
    modal.classList.add('open');
    modalTitle.innerHTML = 'Deseja desfazer o último registro?'
}

set.onclick = () => {
    modal.classList.add('open');
    modalTitle.innerHTML = 'Deseja alterar a medida padrão?'
}

water.onclick = () => {
    water.classList.toggle('moviment');
}

cCancel.onclick = () => {
    modal.classList.remove('open');
    
}