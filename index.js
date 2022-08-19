const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async e => {
    e.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = `https://duckduckgo.com/${url}`;
        else if (!((/^https?:\/\//.test(url)))) url = `http://${url}`;

        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^(https?:\/\/)?[^\s\/:\.]+(\.[^\s\.]+)*\.[^\s\d\.]{2,}(\/\S)*$/i.test(val)) return true;
    return false;
};