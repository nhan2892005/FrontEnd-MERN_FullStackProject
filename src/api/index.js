import axios from 'axios';

const API = axios.create({ baseURL: 'https://memo-server-u4pu.onrender.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = (page) => API.get(`/posts/?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (user, newPost) => API.post(`/posts/${user}`, newPost);
export const likePost = (id, user) => API.patch(`/posts/${user}/likePost/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const deletePost = (user, id) => API.delete(`/posts/${id}/${user}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
