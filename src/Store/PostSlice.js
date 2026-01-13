import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    posts : []
}

export const postSlice = createSlice({
    name : "Post",
    initialState,
   reducers: {
    setAllPosts: (state, action) => {
            state.posts = action.payload; 
        }, //yeh reducer bnaya taake posts saari yahan pe handle hon home page pe dekhane ke lie, isse page refresh krne ki need nhi hogi new post ane pe khud hi state handle hojayegi yahan se
    createPost: (state, action) => {
    
      state.posts.unshift(action.payload); //take latest post top pe ho
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


export const {createPost, dltPost, updPost, setAllPosts} = postSlice.actions