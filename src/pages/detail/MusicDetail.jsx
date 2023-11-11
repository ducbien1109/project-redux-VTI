import React, { useEffect, useRef, useState } from "react";
import postApiArtist from "../../api/postApiArtist";
import { useParams } from "react-router";
import SlideBar from "../../component/SlideBar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const MusicDetail = () => {
  const { id } = useParams(); // dùng để lấy id
  const [detailArtist, setDetailArtist] = useState({});
  const [isPlay, setPlay] = useState(false);
  const detail = async (id) => {
    const detailArtist = await postApiArtist.getDetail(id);
    setDetailArtist(detailArtist.data);
  };
  useEffect(() => {
    if (id) {
      detail(id);
    }
  }, [id]);

  const audioRef = useRef();
  const handlePlayPause = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };
  return (
    <div className="test">
      <div className="mobile-sidebar">
        <SlideBar />
      </div>
      <div>
        <div className="center-container">
          <span className="animation">
            <span className="animation-item"></span>
          </span>
          <>
            <Link to={"/"}>
              <LeftOutlined className="left-detail" />
            </Link>
            <img
              style={{ borderRadius: "100px" }}
              src={detailArtist.image}
              alt="anh"
              width={220}
              height={220}
              className={isPlay ? "img-detail" : ""}
            />
            <Link to={`/my-admin/${detailArtist.id}`}>
              <RightOutlined className="header-menu-icon-right" />
            </Link>
            <p>đây là {detailArtist.detail}</p>
            <audio controls ref={audioRef} autoPlay={isPlay}>
              {isPlay ? (
                <source src={detailArtist.audio} type="audio/mpeg" />
              ) : null}
            </audio>
            <button onClick={handlePlayPause} className="btnPlayMusic">
              {isPlay ? "Pause" : "Play"}
            </button>
          </>
        </div>
        <div className="footer-detail footer-detail-mobile">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MusicDetail;
