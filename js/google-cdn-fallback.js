+function() {

  function replaceGoogleCDN() {
    var links = document.getElementsByTagName('link'),
        href;
    for (var i = 0, n = links.length; i < n; i ++) {
      href = links[i].getAttribute('href');
      if (href.match(/\/\/fonts\.googleapis\.com/)) {
        links[i].setAttribute('href', href.replace('//fonts.googleapis.com/', '//fonts.useso.com/'));
      }
    }
  }

  function getJSON(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          // success
          callback(JSON.parse(this.responseText));
        } else {
          // error
        }
      }
    }
    request.send();
    request = null;
  }

  getJSON('https://freegeoip.net/json/', function(data) {
    if (data.country_code === 'CN') {
      replaceGoogleCDN();
    }
  });

}();

