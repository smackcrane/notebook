export { pageLayout, indexLayout }

/**
 * String HTML template to wrap a page in.
 * Includes stylesheet, KaTeX, home navigation, etc.
 */
function pageLayout(content) {
    return `<!DOCTYPE html>
<!-- KaTeX requires the use of the HTML5 doctype. Without it, KaTeX may not render properly -->
<html>
<head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="../static/stylesheet.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous">

    <!-- The loading of KaTeX is deferred to speed up page rendering -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossorigin="anonymous"></script>

    <!-- To automatically render math in text elements, include the auto-render extension: -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"
    onload="renderMathInElement(document.body, {
          // customised options
          // • auto-render specific keys, e.g.:
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
          ],
          // • rendering keys, e.g.:
          throwOnError : false
        });"></script>
</head>
<body>

    <div id="darkMode" style="float: right; display: block; margin-right: 1em; cursor: pointer;">
        <svg id="darkModeSVG"
            width="30"
            height="20"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="10" fill="grey" />
            <circle id="darkModeSwitch" cx="10" cy="10" r="9" fill="white" />
        </svg>
    </div>
    <script src="../static/darkMode.js"></script>

    <div id='navigation'><h2><a href='../index.html'>Notebook</a></h2></div>

    <div id='text-column'>
        ${content}
    </div>

</body>
</html>
`
}

/**
 * String HTML template for index.html.
 */
function indexLayout(content) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="static/stylesheet.css">
</head>
<body>

    <div id="darkMode" style="float: right; display: block; margin-right: 1em; cursor: pointer;">
        <svg id="darkModeSVG"
            width="30"
            height="20"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="10" fill="grey" />
            <circle id="darkModeSwitch" cx="10" cy="10" r="9" fill="white" />
        </svg>
    </div>
    <script src="static/darkMode.js"></script>


    <div id='text-column'>

    ${content}

    </div>
</body>
</html>
`
}
