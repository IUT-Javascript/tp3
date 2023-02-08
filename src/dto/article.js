class Article {
    id;
    title;
    body;
    usereId;

    constructor(id, title, description) {
        if (!title) {
            throw new RequiredFieldError('title'); //l'instruction throw permet de déclencher une erreur
        }

        if (!description) {
            throw new RequiredFieldError('description'); //l'instruction throw permet de déclencher une erreur
        }

        this.id = id;
        this.title = title;
        this.body = description;
        this.usereId = 1;
    }
}