document.addEventListener("DOMContentLoaded", init);

function captureTable(html) {
  const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/i;
  const match = html.match(tableRegex);
  return match ? match[0] : null;
}

function captureStyle(html) {
  //const styleRegex = /<style(?:(?!<\/style>)[\s\S])*<\/style>/i;
  //const match = html.match(styleRegex);
  //return match ? match[0] : null;

  const styleRegex = /<style[^>]*>([^<]*)<\/style>/i;
  const matches = html.match(styleRegex);

  if (matches && matches.length >= 2) {
    const cssCode = matches[1].trim();
    return cssCode;
  }

  return false;

  //const styleRegex = /<style[^>]*>[\s\S]*?<\/style>/i;
  //const match = html.match(styleRegex);
  //return match ? match[0] : null;  
}

function init() {
  console.log('hello')

  const spreadsheets = document.querySelectorAll('.google-spreadsheet');

  for ( let spreadsheet of spreadsheets ) {
    const data = spreadsheet.getAttribute('data-src');

    if(data) {
      fetch(data, {cache: "no-store"})
        .then(function (response) {
            switch (response.status) {
                case 200:
                    return response.text();
                case 404:
                    throw response;
            }
        })
        .then(function (template) {
          spreadsheet.innerHTML = '<div class="ritz grid-container" dir="ltr">' + captureTable(template) + '</div>';

          var css = captureStyle(template),
              head = document.head || document.getElementsByTagName('head')[0],
              style = document.createElement('style');

          head.appendChild(style);

          style.type = 'text/css';
          if (style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
        })
        .catch(function (response) {
            // "Not Found"
            console.log('rere', response.statusText);
        });
    }
  }
}
