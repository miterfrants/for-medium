import { dataContext } from '../Repository/DataContext.js';

export const UserController  = async (request, reply) => {
    const user = await dataContext.getUserRepositoryInstance().find(request.params.userId);
    if (!user) {
        reply.status(404).send({message: "user not found"});
    }
    return user;
}