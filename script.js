const params = new URLSearchParams(window.location.search);
const songId = params.get("song");

const playerDiv = document.getElementById("player");

if (songId) {
  playerDiv.innerHTML = `
    <div class="player-wrapper">
      <iframe
        src="https://open.spotify.com/embed/track/${songId}?theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
      <div class="overlay"></div>
    </div>
  `;
}
