import { Article } from '../Models/ORM/Article.js';
import { Op } from 'sequelize';

export class ArticleRepository {
    async findAll (ids) {
        return Article.findAll({
            where: {
                id: {
                    [Op.in]: ids
                }
            },
            attributes: ['id', 'title', 'content', 'userId']
        }).then(articles=> {
            return articles;
        });
    }
}