document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todos os carrosseis
    const swipers = document.querySelectorAll('.swiper');
    
    swipers.forEach(swiper => {
        new Swiper(swiper, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    });

    // Botão voltar ao topo
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Suave ao clicar no botão
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});