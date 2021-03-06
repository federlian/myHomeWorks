export class UsersService{
  _url= 'https://jsonplaceholder.typicode.com/users';

  getUsers(){
    return fetch(`${this._url}`).then(value => value.json());
  }

  getUserById(id){
    return fetch(`${this._url}/${id}`).then(value => value.json());
  }
}