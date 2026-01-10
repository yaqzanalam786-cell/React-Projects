import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    posts : []
}

export const postSlice = createSlice({
    name : "Post",
    initialState,
   reducers: {
    createPost: (state, action) => {
    
      state.posts.push(action.payload);
    },

    dltPost: (state, action) => {
      state.posts = state.posts.filter(
        post => post.$id !== action.payload
      );
    },

    updPost: (state, action) => {
      state.posts = state.posts.map(post =>
        post.$id === action.payload.$id ? action.payload : post
      );
    }
  }

})

export default postSlice.reducer


export const {createPost, dltPost, updPost} = postSlice.actions