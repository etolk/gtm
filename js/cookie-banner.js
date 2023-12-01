function showCookieBanner() {
  document.getElementById('cookieBanner').style.display = 'block';
}

window.onload = function() {
  if (getCookie("cookieConsent") === "accepted") {
    document.getElementById('cookieBanner').style.display = 'none';
  } else {
    document.getElementById('cookieBanner').style.display = 'block';
  }
};

function acceptCookies() {
  document.cookie = "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  document.getElementById('cookieBanner').style.display = 'none';
}

function declineCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
