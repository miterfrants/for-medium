import { Op } from 'sequelize';
import { Keyword } from '../Models/ORM/Keyword.js';

export class KeywordRepository {
    async findArticlesIds (keyword) {
        return (await Keyword.findAll({
            where: keyword ? {
                keyword: {
                    [Op.like]: '%' + keyword + '%'
                }
            } : {},
            attributes: ['articleId']
        }).then(keywords => {
            return keywords.map(item=> item.dataValues);
        })).map(keyword => keyword.articleId);
    }
}