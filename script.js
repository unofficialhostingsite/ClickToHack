document.getElementById('reveal-button').addEventListener('click', function() {
    document.querySelector('.landing-page').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    document.getElementById('birthday-music').play();
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        alert('Happy Birthday Sathya!');
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

