import axios from 'axios'

const updateUser = (url, id, info) => {
    return axios.put(`${url}/users/${id}`, info)
}
const getUserById = (url, id) => {
    return axios.get(`${url}/users/${id}`)
}
const getAllTodos = (url) => {
    return axios.get(`${url}/todos`)
}
const getAllPosts = (url) => {
    return axios.get(`${url}/posts`);
}

const getTodosById = (url, id) => {
    return axios.get(`${url}/todos?userId=${id}`)
}
const getUserByPost = (url, id) => {
    return axios.get(`${url}/posts/${id}`)
}
const getAllUsers = (url) => {
    return axios.get(`${url}/users`)
}
const getAllData = (url) => {
    return axios.get(`${url}`)
}
const getUserFullData = async (url, id) => {
    let user = {}
    const { data: userInfo } = await getUserById(url, id);
    user.name = userInfo.name;
    user.email = userInfo.email;
    const { data: todos } = await getTodosById(url, id);
    user.todos = todos.slice(0, 5);
    const { data: post } = await getUserByPost(url, id);
    user.post = post.title;
    return user;


}

export { getUserById, getTodosById, getUserFullData, getAllUsers, updateUser, getAllData, getAllTodos, getAllPosts };