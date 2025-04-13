import axios from "axios";
import { CommentAddResponse, CommentResponse, ContactResponse, PostResponse, PostsResponse } from "./types";

axios.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    config.baseURL = "http://localhost:5000/api/v1"; // Set the base URL for the request
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response.data;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export const getPosts = async (page: number, search: string = ''): Promise<PostsResponse> => {
  return await axios.get(`/posts?page=${page}&search=${search}`);
};

export const getSignPost = async (postId: string): Promise<PostResponse> => {
    return await axios.get(`/posts/${postId}`);
}

export const getComments = async (postId: number): Promise<CommentResponse> => {
    return await axios.get(`/comments/${postId}`);
}

export const addComment = async (postId: number, name: string, comment: string): Promise<CommentAddResponse> => {
    return await axios.post(`/comments/`, { postId, name, comment });
}

export const contact = async (name: string, email: string, message: string): Promise<ContactResponse> => {
    return await axios.post(`/contact`, { name, email, message });
}