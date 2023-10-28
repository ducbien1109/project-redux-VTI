import React, { useEffect, useState } from 'react';
import postApiArtist from '../../api/postApiArtist'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Lyrics = () => {
    const {id} = useParams()
    const [lyricsDetail, setLyricsDetail] = useState({})
    const lyricsMusic = async (id)=>{
        const lyrics = await postApiArtist.getDetail(id)
        setLyricsDetail(lyrics.data)
    }
    useEffect(()=>{
        if(id){
            lyricsMusic(id)
        }
    }, [id])
    return (
        <div>
            <h1 style={{color:'aqua'}}>Lời bài hát</h1>
            <p className='color-detail-content'style={{ "--i": true }}>{lyricsDetail.detail}</p>
            <Link to={`/spotify-popularRadio/${lyricsDetail.id}`}>Quay lại trang Detail</Link>
        </div>
    );
};

export default Lyrics;