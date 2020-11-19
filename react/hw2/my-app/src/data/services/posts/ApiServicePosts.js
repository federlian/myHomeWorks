export class ApiServicePosts {
    _url = 'http://jsonplaceholder.typicode.com/posts';

    async getPosts() {
        return (await fetch(this._url)).json();
    }

    async getPostById(id) {
        return (await fetch(`${this._url}/${id}`)).json();
    };
}