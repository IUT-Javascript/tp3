class ArticleHtml {
    article;

    constructor(article) {
        this.article = article;
    }

    toHtmlElement() {
        const articleHtml = document.createElement('article');
        const span = document.createElement('span');
        const p = document.createElement('p');

        span.innerText = this.article.title;
        p.innerText = this.article.body;
        articleHtml.dataset.id = this.article.id; //l'attribut dataseet permet d'accéder (en lecture et écriture) aux attributs HTML data-*
        articleHtml.appendChild(span);
        articleHtml.appendChild(p);
        articleHtml.classList.add('article'); //article.setAttribute('class', 'article');

        return articleHtml;
    }
}