import { dbContext } from "../Models/ORM/DbContext.js";
import { Article } from '../Models/ORM/Article.js';

export const ArticlesController  = () => {
    return dbContext.sync().then(()=>{
        return Article.findAll({
            attributes: ['title', 'content', 'userId']
        }).then(articles=> {
            return articles;
        })
    });
}