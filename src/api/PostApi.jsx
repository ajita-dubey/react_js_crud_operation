// create axois instance

import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'

});

//get method (to read the data from api)
export const getPost = () => {
    return api.get('/posts');
};

//delete method (delete the data from api)

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

//post method (to update the data in api)

export const postData = (post) => {
    return api.post('/post', post);
}