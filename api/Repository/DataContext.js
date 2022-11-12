
import { ArticleRepository } from './ArticleRepository.js';
import { KeywordRepository } from './KeywordRepository.js';
import { UserRepository } from './UserRepository.js';

export const dataContext = {
    getArticleRepositoryInstance: () => {
        return new ArticleRepository();
    },
    getKeywordRepositoryInstance: () => {
        return new KeywordRepository();
    },
    getUserRepositoryInstance: () => {
        return new UserRepository();
    }
}