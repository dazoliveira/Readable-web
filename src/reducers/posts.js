import { RECEIVE_POSTS, ADD_POST, SORT_POSTS, UPDATE_VOTE_SCORE } from '../actions/posts'

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case SORT_POSTS:
            return action.posts
        case UPDATE_VOTE_SCORE:
            return state.map((item) => {
                if (item.id === action.post.id) {
                    return {
                        ...item,
                        ...action.post,
                    }
                }
                return item
            })
        case ADD_POST:
            return state.concat(action.post)
        default:
            return state
    }
}