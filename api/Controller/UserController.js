import { dbContext } from '../Models/ORM/DbContext.js';
import { User } from '../Models/ORM/User.js';
export const UserController  = async (request, reply) => {
    const user = await dbContext.sync().then(()=>{
        return User.findOne({
            where: {id: request.params.userId},
            attributes: ['id', 'name']
        }).then((result)=>{
            return result?.dataValues;
        })
    });
    if (!user) {
        reply.status(404).send({message: "user not found"});
    }
    return user;
}