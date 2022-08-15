const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value;
        if (!isUrl(url)) url = 'https://duckduckgo.com/search?=' + input.value;

        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^(http(s)?:\/\/)?\S+\.\S{2,}$/i.test(val)) return true;
    return false;
};