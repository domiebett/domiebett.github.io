let currentUrl;

document.addEventListener('DOMContentLoaded', async () => {
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
