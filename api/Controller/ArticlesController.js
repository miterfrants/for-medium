import { dataContext } from '../Repository/DataContext.js';

export const ArticlesController  = async (req) => {
    const articleIds = await dataContext.getKeywordRepositoryInstance().findArticlesIds(req.query.keyword);
    return dataContext.getArticleRepositoryInstance().findAll(articleIds);
}