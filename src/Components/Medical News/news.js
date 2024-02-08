const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=in&" +
  "category=health&" +
  "apiKey=cd147b5e8e1f453d9055367c17437d34";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    let something = data.articles;
    let list = [];

    for (let i = 0; i < 11; i++) {
      if (
        something[i].source.name !== "YouTube" &&
        something[i].urlToImage !== null &&
        something[i].description !== ""
      ) {
        list.push(something[i]);
      }
    }

    for (let m = 1; m < 20; m++) {
      if (list[m]) {
        document.getElementById(`img${m}`).src = list[m].urlToImage;
        document.getElementById(`title${m}`).innerText = list[m].title;
        document.getElementById(`desc${m}`).innerText = list[m].description;
        document.getElementById(`link${m}`).href = list[m].url;
      }
    }
  })
  .catch((error) => {
    // Handle errors
    console.error("Fetch error:", error);
  });
