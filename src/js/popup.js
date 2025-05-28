const openBtn = document.querySelector('.trigger-add-to-cart');
const closeBtn = document.querySelector('.closeModal');
const exitBtn = document.querySelector('.exit-btn');
const overlays = document.querySelector('.modalOverlay');

function openModal() {
    overlays.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    overlays.classList.remove('active');
    document.body.classList.remove('modal-open');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
exitBtn.addEventListener('click', closeModal);

overlays.addEventListener('click', function(e) {
if (e.target === overlays) closeModal();
});
