
const render = () => {
    return `<html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" href="/assets/styles.css" rel="stylesheet" />
        </head>
        <body>
            <header><h1 class="u-clr-eggplant">Bookshelf</h1></header>
            <div id="app"></div>
        </body>
        <script type="text/javascript" src="/assets/bundle.js" charset="utf-8"></script>
    </html>`;
};


module.exports = render;
