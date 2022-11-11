import { dbContext } from './DbContext.js';
import { DataTypes } from 'sequelize';
import { User } from './User.js';

export const Article = dbContext.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }, content: {
        type: DataTypes.STRING,
        allowNull: true
    }, deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
});

Article.belongsTo(User);
Article.sync();