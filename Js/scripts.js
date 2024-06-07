document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector('#box1 button');
    button1.addEventListener('click', () => {
        const additionalContent = document.createElement('p');
        additionalContent.innerText = 'Tibia oferece um vasto mundo com inúmeras quests, perigos e aventuras!';
        button1.parentNode.insertBefore(additionalContent, button1.nextSibling);
        button1.remove();
    });

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = '#3e3e3e';
            box.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = '#2c2c2c';
            box.style.transform = 'scale(1)';
        });
    });

    const box3 = document.getElementById('box3');
    box3.addEventListener('click', () => {
        alert('Explore mais dicas em nosso blog para melhorar seu jogo em Tibia!');
    });
});
