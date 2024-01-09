const questions = document.querySelectorAll('.item');

questions.forEach(item => {
    const response = item.querySelector('.response');

    const imageChange = item.querySelector('.image')

    console.log(imageChange);

    item.addEventListener('click', () => {

        item.classList.toggle('active'); // Alternar a classe 'active' na pergunta clicada

        // Se a classe 'active', estiver presente na li, exibe a resposta, senão, oculta
        if (item.classList.contains('active')) {

            response.style.display = 'block';

            imageChange.src = './assets/images/icon-minus.svg';

        } else {
            response.style.display = 'none';

            imageChange.src = './assets/images/icon-plus.svg';
        }
    });
});

