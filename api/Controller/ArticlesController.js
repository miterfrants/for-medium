import { dbContext } from "../Models/ORM/DbContext.js";
import { Article } from '../Models/ORM/Article.js';
import { User } from '../Models/ORM/User.js';

export const ArticlesController  = () => {
    return dbContext.sync().then(()=>{
        return Article.findAll({
            attributes: ['title', 'content']
        }).then(articles=> {
            return articles;
        })
    });
}