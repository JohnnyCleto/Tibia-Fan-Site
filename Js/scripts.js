// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.querySelector('#box1 button');
    button1.addEventListener('click', function() {
        var additionalContent = document.createElement('p');
        additionalContent.innerText = 'Tibia oferece um vasto mundo com inúmeras quests, perigos e aventuras!';
        button1.parentNode.insertBefore(additionalContent, button1.nextSibling);
        button1.parentNode.removeChild(button1);
    });

    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('mouseenter', function() {
            box.style.backgroundColor = '#3e3e3e';
            box.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseleave', function() {
            box.style.backgroundColor = '#2c2c2c';
            box.style.transform = 'scale(1)';
        });
    });

    var box3 = document.getElementById('box3');
    box3.addEventListener('click', function() {
        alert('Explore mais dicas em nosso blog para melhorar seu jogo em Tibia!');
    });
});
