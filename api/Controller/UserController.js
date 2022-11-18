import { dataContext } from '../Repository/DataContext.js';
import { SEVERITY_LEVEL, CustomError } from '../Models/CustomError.js';

export const UserController  = async (request, reply) => {
    const user = await dataContext.getUserRepositoryInstance().find(request.params.userId);
    if (!user) {
        throw new CustomError('user not found', 404, SEVERITY_LEVEL.INFO);
    }
    return user;
}