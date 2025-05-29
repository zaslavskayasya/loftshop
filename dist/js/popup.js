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

if(openBtn){
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    exitBtn.addEventListener('click', closeModal);    
    overlays.addEventListener('click', function(e) {
    if (e.target === overlays) closeModal();
    });
}

/**trigger-enter */
const openBtn2 = document.querySelector('.trigger-enter');

if(openBtn2){
    openBtn2.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    exitBtn.addEventListener('click', closeModal);    
    overlays.addEventListener('click', function(e) {
    if (e.target === overlays) closeModal();
    });
}

/**trigger-registration */
const openBtn3 = document.querySelector('.reGistrationTrigger');

if(openBtn3){
    openBtn3.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    exitBtn.addEventListener('click', closeModal);    
    overlays.addEventListener('click', function(e) {
    if (e.target === overlays) closeModal();
    });
}