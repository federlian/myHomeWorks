export class UserService{
  _url = 'https://jsonplaceholder.typicode.com/users';

  async getAllUsers() {
    return (await fetch(this._url)).json();
  }
}