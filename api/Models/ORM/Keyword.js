import { dbContext } from './DbContext.js';
import { DataTypes } from 'sequelize';
import { Article } from './Article.js';

export const Keyword = dbContext.define('Keyword', {
    keyword: {
      type: DataTypes.STRING,
      allowNull: false
    }
}, {
});

Keyword.belongsTo(Article);
Keyword.sync();