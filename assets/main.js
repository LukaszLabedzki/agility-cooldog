document.addEventListener("DOMContentLoaded", init);

function captureTable(html) {
  const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/i;
  const match = html.match(tableRegex);
  return match ? match[0] : null;
}

function captureStyle(html) {
  const styleRegex = /<style[^>]*>([^<]*)<\/style>/i;
  const matches = html.match(styleRegex);

  if (matches && matches.length >= 2) {
    const cssCode = matches[1].trim();
    return cssCode;
  }

  return false;
}

function init() {
  const spreadsheets = document.querySelectorAll('.google-spreadsheet');

  console.log(document.documentElement.getAttribute('lang'))

  for ( let spreadsheet of spreadsheets ) {
    let loadingText = 'Loading...'
    if(document.documentElement.getAttribute('lang') === 'pl-PL') {
      loadingText = 'Ładowanie...'
    }

    spreadsheet.innerHTML = '<div style="height: 500px;"><h4>' + loadingText + '</h4></div>'

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

          const wf = document.querySelector('.waffle');
          const th = wf.querySelector('thead');
          const ths = wf.querySelectorAll('th');

          th.innerHTML = '';

          const tr = wf.querySelector('tr')
          th.appendChild(tr)

          if(!document.body.classList.contains('page-czas') && !document.body.classList.contains('page-time')) {
            new Tablesort(wf);
          }

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
            console.log(response.statusText);
        });
    }
  }
}
