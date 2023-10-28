import instance from "./axiosClinet"

const getPostApiPopularRadio = {
    getAllRadio(){
        return instance.get('/spotify-popularRadio')
    },
    getDetail(postId){
        return instance.get(`/spotify-popularRadio/${postId}`)
    },
    create(body){
        return instance.post('/spotify-popularRadio', body)
    },
    delete(postId){
        return instance.delete(`/spotify-popularRadio/${postId}`)
    },
    update(body, postId){
        return instance.put(`/spotify-popularRadio/${postId}`, body)
    },
}
export default getPostApiPopularRadio