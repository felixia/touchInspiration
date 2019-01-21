import { apiWrapper } from './ApiFunctions';

class UsersApi {

  static getUsers() {
  	
    const url = '/users';
    
    return apiWrapper('GET', url, {})
  }

  static updateUser(user){
    const url = '/users/:id';
    
    return apiWrapper('PATCH', url, {name:user.name,email:user.email,bio:user.bio,occupation:user.occupation})

}
  
}


export default UsersApi;

