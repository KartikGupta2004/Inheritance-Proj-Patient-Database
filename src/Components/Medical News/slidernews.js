const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=in&' +
  'category=health&' +
  'apiKey=cd147b5e8e1f453d9055367c17437d34';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extract articles from the response data
    const articles = data.articles.filter(article => article.source.name !== "YouTube" && article.urlToImage !== null);

    // Iterate through the articles and update carousel slides
    articles.slice(0, 3).forEach((article, index) => {
      const slideIndex = index + 1;
      const imgElement = document.getElementById(`slide${slideIndex}_img`);
      const headElement = document.getElementById(`slide${slideIndex}_head`);
      const descElement = document.getElementById(`slide${slideIndex}_desc`);

      // Log to check if elements are found
      console.log(imgElement, headElement, descElement);

      if (imgElement && headElement && descElement) {
        imgElement.src = article.urlToImage;
        headElement.innerText = article.title;
        descElement.innerText = article.description;
      } else {
        console.error(`Element(s) not found for slide ${slideIndex}`);
      }
    });
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });
