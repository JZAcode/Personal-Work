const assetDirectory = new URL('../ASSETS/', document.currentScript.src);

fetch(new URL('AbsInvDescription.txt', assetDirectory))
    .then(response => response.text())
    .then(data => {
        document.getElementById('absinv-description').textContent = data;
    });

fetch(new URL('About.txt', assetDirectory))
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-description').textContent = data;
    });