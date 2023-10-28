import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ListData(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { text, singer, name, buttonEdit, buttonDel, id } = props;
  console.log(id);
  const navigate = useNavigate();
  useEffect(() => {
    const delay = isHovered ? setTimeout(() => setShowButton(true), 300) : null;
    return () => {
      if (delay) {
        clearTimeout(delay);
        setShowButton(false);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const goToMusicDetail = (id) => {
    navigate(`/music/${id}`);
  };

  return (
    <div
      className="list-data"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="hover-form"
        style={{ display: showButton ? "block" : "none" }}
      >
        {buttonEdit}
        {buttonDel}
      </div>
      <p>{text}</p>
      <p onClick={() => goToMusicDetail()}>{name}</p>
    </div>
  );
}

export default ListData;
