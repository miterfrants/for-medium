export class UserRepository {
    async find (userId) {
        return fetch(`http://localhost:5000/users/${userId}`)
            .then((respPromise)=>{
                return respPromise.json();
            })
    }
}