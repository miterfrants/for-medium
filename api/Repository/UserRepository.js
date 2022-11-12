import { User } from '../Models/ORM/User.js';

export class UserRepository {
    async find (id) {
        return User.findOne({
            where: {id: id},
            attributes: ['id', 'name']
        }).then((result)=>{
            return result?.dataValues;
        });
    }
}