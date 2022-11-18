export class ArticleRepository {
    async findAll () {
        return fetch('http://localhost:5000/articles')
            .then((respPromise) => {
                return respPromise.json()
            })
    }
}