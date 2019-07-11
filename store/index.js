import axios from 'axios'
//create stote
export const state = () => ({
  //  массив постов
  posts: {}
})


//create getters
export const getters = {
  posts(state) {
    return state.posts;
  }
}

//create mitations
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  }
}


//create actions
export const actions = {
  async nuxtServerInit({commit}){
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    commit("SET_POSTS", data);
  }
  // setPosts({commit}, posts) {
  //   commit("SET_POSTS", posts);
  // }
}
