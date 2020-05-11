const nav = `
<section class="left">
Dominic Bett
</section>
<section class="right">
<ul>
    <li class="appLink" data-url="myProfile">My Profile</li>
    <li class="appLink" data-url="myWork">My Work</li>
    <li class="appLink" data-url="funAndGames">Fun and Games</li>
</ul>
</section>`;

const funAndGames = `
<div class="links">
<div>
    <div class="numbers thumbnail">
        <span>1</span><span>2</span><span>3</span>
    </div>
    <a class="appLink" data-url="numberGame" href="#"></a>
    <p>Numbers Lesson</p>
</div>
</div>`;

const numberGame = `<div id="numberGame"><div id="number">1</div></div>`;

const myProfile = `<p>My Profile</p>`;

const myWork = `<p>My Work</p>`;


document.addEventListener('DOMContentLoaded', async () => {
    const containerElement = await document.getElementById('container');
    const navElement = await document.getElementById('navigation');

    const contents = {
        myProfile: myProfile,
        myWork: myWork,
        funAndGames: funAndGames,
        numberGame: numberGame
    };
    
    navElement.innerHTML = nav;
    containerElement.innerHTML = contents['myProfile'];

    await document.addEventListener('click', async (event) => {
        if (event.target.className === 'appLink') {
            event.preventDefault();
            event.stopPropagation();

            let url = event.target.dataset.url;
            containerElement.innerHTML = contents[url];

            await loadJsFile(url);
            await loadCssFile(url);
        }
    });
});

async function loadJsFile(fileName) {
    const className = 'addedJs';
    const body = document.getElementsByTagName('body')[0];

    const scripts = document.querySelectorAll(`.${className}`);
    scripts.forEach((script) => {
        body.removeChild(script);
    });

    let script = await document.createElement('script');
    script.className = className;
    await script.setAttribute('type', 'text/javascript');
    await script.setAttribute('src', `./static/js/${fileName}.js`);

    return body.appendChild(script);
}

async function loadCssFile(fileName) {
    const className = 'addedCss';
    const head = document.getElementsByTagName('head')[0];

    const styles = document.querySelectorAll(`.${className}`);
    styles.forEach((style) => {
        head.removeChild(style);
    });

    let link = await document.createElement('link');
    link.className = className;
    await link.setAttribute('type', 'text/css');
    await link.setAttribute('href', `./static/css/${fileName}.css`);
    await link.setAttribute('rel', 'stylesheet');

    return head.appendChild(link);
}
