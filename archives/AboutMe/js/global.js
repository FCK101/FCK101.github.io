/**
 * Top navigation bar late night mode switch button function
 * Change the overall style of the page to bright or dark when clicking the button
 * Alex
 **/

// Bind button through element id and tagName
const btn = document.getElementById('modeBtn');
const linkBtns = document.querySelectorAll('.linkBtn');

// Add click event for button
btn.addEventListener('click', (e) => {
    const body = document.body;
    const titleWord = document.getElementById('titleWord');
    const allLinks = document.querySelectorAll('.link');
    const allp = document.querySelectorAll('p');
    const allLi = document.querySelectorAll('.li')
    const allMenu = document.querySelectorAll('.dropdown-menu');
    const alltitle = document.querySelectorAll('.introduce-title');

    // While the HTML element is 🌞 or 🌙, the page color style becomes bright or dark
    if (e.target.innerHTML === '🌞') {
        body.style.backgroundColor = '#1b1b1d';
        titleWord.style.color = 'white';
        allMenu.forEach(menu => {
            menu.style.backgroundColor = '#242526'
        });
        alltitle.forEach(title => {
            title.style.color = 'white'
        });
        allLi.forEach(li => {
            li.style.color = 'white'
        });
        allLinks.forEach(link => {
            link.style.color = 'white';
            link.addEventListener('mouseover', () => {
                link.style.color = '#338bff';
            });

            link.addEventListener('mouseout', () => {
                link.style.color = 'white';
            });
        });
        allp.forEach(p => {
            p.style.color = 'white';
        });
        e.target.innerHTML = '🌙'
    } else {
        body.style.backgroundColor = 'white';
        titleWord.style.color = 'black';
        allMenu.forEach(menu => {
            menu.style.backgroundColor = 'white'
        });
        alltitle.forEach(title => {
            title.style.color = 'black'
        });
        allLi.forEach(li => {
            li.style.color = 'black'
        });
        allLinks.forEach(link => {
            link.style.color = 'black';
            link.addEventListener('mouseover', () => {
                link.style.color = '#338bff';
            });

            link.addEventListener('mouseout', () => {
                link.style.color = 'black';
            });
        });
        allp.forEach(p => {
            p.style.color = 'black';
        });
        e.target.innerHTML = '🌞'
    }
});

linkBtns.forEach(linkBtn => {
    linkBtn.addEventListener('click', (e) => {
        alert("The file is large and inconvenient to display. You can view the displayed personal items on the homepage");
    });
});