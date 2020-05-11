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
    <a class="appLink" data-url="numberGame"></a>
    <p>Numbers Game</p>
</div>
</div>`;

const numberGame = `<div id="numberGame"><div id="number">1</div></div>`;

const myProfile = `<div id="profile"><div class="card">
<img src="./static/images/profile.jpg" alt="John" style="width:100%">
<h1>Dominic Bett</h1>
<p class="title">Full Stack Software Engineer</p>
<p>Andela & Ceros</p>
<div style="margin: 24px 0;">
  <a href="#"><i class="fa fa-google"></i></a>
  <a href="https://twitter.com/bettdominic001"><i class="fa fa-twitter"></i></a>  
  <a href="https://www.linkedin.com/in/dominic-bett-a6430a125"><i class="fa fa-linkedin"></i></a>  
  <a href="#"><i class="fa fa-facebook"></i></a>
</div>
<p><button><a><i class="fa fa-phone"></i></a> Contact</button></p>
</div></div>`;

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
    loadJsFile('myProfile');
    loadCssFile('myProfile');

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
