const helloUser = document.querySelector('header h2');
const buttonWater = document.getElementById('water');

validation()

buttonWater.onclick = () => {
    const usuarioWater = window.prompt("Olá, qual o seu nome?");
    localStorage.setItem('usuario', usuarioWater);
    helloUser.innerHTML = `Olá ${usuarioWater}`;
    atualizarPage();
}

function atualizarPage() {
    window.location.reload();
}

function validation() {
    if(localStorage.usuario && localStorage.usuario !== 'null') {
        helloUser.innerHTML = 'Olá&nbsp;' + localStorage.usuario + ',';
    }
}

const modalTitle = document.querySelector('#modal h2');
const inputModal = document.querySelector('.input-modal');
console.log(inputModal);

// buttons prevent default
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

cCancel.onclick = () => {
    modal.classList.remove('open');    
}

cConfirm.onclick = () => {
    alert('Função em desenvolvimento!');
    modal.classList.remove('open');
}