import { dbContext } from './DbContext.js';
import { DataTypes } from 'sequelize';

export const User = dbContext.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
}, {
});

User.sync();