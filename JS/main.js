fetch('../ASSETS/AbsInvDescription.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('absinv-description').textContent = data;
    });

fetch('../ASSETS/About.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-description').textContent = data;
    });