class ArticleService {
    //La méthode étant async, elle induit une Promise<T> en retour.
    //Ici T, correspond à un array
    async loadArticlesFromJson(articlesJson) {
        if (!articlesJson instanceof String)
            throw new Error('Chaine JSON non reconnue');

        const articles = [];

        JSON.parse(articlesJson).forEach(a => {
            articles.push(new Article(a.id, a.title, a.description));
        });

        return articles;
    }

    async loadArticleFromApi(id) {
        const baseUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const headers = {
            method: 'GET'
        };

        return fetch(baseUrl, headers).then(response => {
            if (!response.ok)
                throw new Error('Une erreur est survenue durant l\'appel HTTP.');

            return response.json();
        }).then(articleJson => {
            return new Article(articleJson.id, articleJson.title, articleJson.body);
        });
    }

    exportArticleToJson(articles) {
        const baseUrl = `https://jsonplaceholder.typicode.com/posts`;
        const headers = {
            method: 'POST'
        };

        const articlesJson = JSON.stringify(articles);
        console.log(articlesJson);

        articles.forEach(article => {
            headers.body = JSON.stringify(article);
            fetch(baseUrl, headers)
                .then(response => {
                    if (!response.ok)
                        throw new Error('Une erreur est survenue durant l\'appel HTTP.');

                    return response.json();
                })
                .then((json) => console.log(json));
        });
    }
}