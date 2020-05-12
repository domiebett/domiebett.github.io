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

let currentUrl;

document.addEventListener('DOMContentLoaded', async () => {
    const navElement = await document.getElementById('navigation');
    navElement.innerHTML = nav;

    let homePage = 'myProfile';
    loadContent(homePage);

    await document.addEventListener('click', async (event) => {
        if (event.target.className === 'appLink') {
            event.preventDefault();
            event.stopPropagation();

            let url = event.target.dataset.url;
            loadContent(url);
        }
    });
});

async function loadContent(content) {
    // dont load if we are on the current url.
    if (currentUrl === content)
        return
    
    currentUrl = content;
    const container = await document.getElementById('container');

    container.innerHTML = await loadHtmlFile(content);
    await setupIframeClick();
    await loadJsInIframe(content);

    $('.appLink').removeClass('active');
    $(`.appLink[data-url="${content}"]`).addClass('active');
}

async function loadHtmlFile(fileName) {
    return `<iframe type="text/html" src="./static/html/${fileName}.html"></iframe>`;
}

async function setupIframeClick(container) {
    $('iframe').on('load', () => {
        let iframe = $('iframe').contents();

        iframe.find('.appLink').on('click', (event) => {
            loadContent(event.target.dataset.url);
        });
    });
}

async function loadJsInIframe(url) {
    $('iframe').on('load',async () => {
        let iframe = $('iframe').contents();

        let script = await document.createElement('script');
        await script.setAttribute('src', `./../js/${url}.js`);
        await script.setAttribute('type', 'text/javascript');
        iframe.find('body').append(script);
    });
}

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
