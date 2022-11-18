
import { ArticleRepository } from './ArticleRepository.js';
import { UserRepository } from './UserRepository.js';

export const dataContext = {
    getArticleRepositoryInstance: () => {
        return new ArticleRepository();
    },
    getUserRepositoryInstance: () => {
        return new UserRepository();
    }
}