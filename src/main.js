initArticle();

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

const exportArticlesButton = document.querySelector('#exportArticles');
exportArticlesButton.addEventListener('click', exportArticlesButtonClick);