// Galeria de Imagens
class Gallery {
    constructor() {
        this.gallery = document.querySelector('.gallery');
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.innerHTML = `
            <span class="close">&times;</span>
            <img class="modal-content" id="modal-image">
        `;
        document.body.appendChild(this.modal);
        
        this.init();
    }
    
    init() {
        if (this.gallery) {
            this.gallery.addEventListener('click', (e) => {
                if (e.target.tagName === 'IMG') {
                    this.openModal(e.target.src, e.target.alt);
                }
            });
            
            const closeBtn = this.modal.querySelector('.close');
            closeBtn.addEventListener('click', () => this.closeModal());
            
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
            
            // Fechar com ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.modal.style.display === 'block') {
                    this.closeModal();
                }
            });
        }
    }
    
    openModal(src, alt) {
        const modalImg = this.modal.querySelector('#modal-image');
        modalImg.src = src;
        modalImg.alt = alt;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});