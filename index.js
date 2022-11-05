function showMeme() {
  const url = "https://meme-api.herokuapp.com/gimme";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const caption = document.getElementById("caption");
      caption.innerHTML = `${data.title}<br>by ${data.author}`;

      const img = document.getElementById("img");
      img.src = data.url;
      img.width = 375;
      img.height = 375;

      const links = document.getElementById("links");
      links.innerHTML = "Reddit Post Link";

      const href = document.getElementById("href");
      href.href = data.postLink;
    });
}
