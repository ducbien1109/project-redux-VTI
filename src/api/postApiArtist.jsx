import instance from "./axiosClinet"

const getPostApiPopularArtist = {
    getAll(){
        return instance.get('/spotify-music')
    },
    getDetail(postId){
        return instance.get(`/spotify-music/${postId}`)
    },
    create(body){
        return instance.post('/spotify-music' , body)
    },
    delete(postId){
        return instance.delete(`/spotify-music/${postId}`)
    },
    update(body, postId){
        return instance.put(`/spotify-music/${postId}`, body)
    }
}
export default getPostApiPopularArtist