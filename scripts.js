function navigate() {
  if ((/Mobi|Android/i.test(navigator.userAgent))) {
    window.location.href = 'https://github.com/designestjay/xmascard/raw/main/TTC-Christmas%20AR.glb';
  }
  if (/Mobi|iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href = 'https://github.com/designestjay/xmascard/raw/main/TTC-Christmas%20AR.usdz';
  }
}
