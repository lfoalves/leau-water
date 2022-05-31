const modalTitle = document.querySelector('#modal h2');
const inputModal = document.querySelector('.input-modal');
console.log(inputModal);

// buttons prevenção de comportamento padrão
cCancel.addEventListener('click', function(e) {
    e.preventDefault();
})
cConfirm.addEventListener('click', function(e) {
    e.preventDefault();
})

revert.onclick = () => {
    modal.classList.add('open');
    modalTitle.innerHTML = 'Deseja desfazer o último registro?';
    inputModal.style.display = 'none';
}

set.onclick = (e) => {
    e.preventDefault();
    modal.classList.add('open');
    modalTitle.innerHTML = 'Deseja alterar a medida padrão?'
    inputModal.style.display = 'flex';
}

water.onclick = () => {
    water.classList.toggle('moviment');
}

cCancel.onclick = () => {
    modal.classList.remove('open');    
}