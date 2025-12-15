// Llegeix paràmetres de la URL
const params = new URLSearchParams(window.location.search);
const songId = params.get("song");

if (songId) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://open.spotify.com/embed/track/${songId}?theme=0`;
  iframe.width = "300";
  iframe.height = "80";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

  document.getElementById("player").appendChild(iframe);
} else {
  document.body.innerHTML = "<p>No s'ha trobat cap cançó 🎧</p>";
}
