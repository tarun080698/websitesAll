import API from '../../../utils/api'

export const getSitePosts = (skip) => {
    return dispatch => {
        API.getSitePosts(skip, res => {
            
            dispatch({
                type: "GOT_SITE_POST",
                payload: res.data,
                skip: skip
            })
        })
    }
}

// export const getPostCount = (skip) => {
//     return dispatch => {
//         API.getSitePosts(skip, res => {
//             dispatch({
                
//             })
//         })
//     }
// }