import { useNavigate } from "react-router";

function ListData(props) {
  const { text, name, id } = props;
  console.log(id);
  const navigate = useNavigate();
  const goToMusicDetail = (id) => {
    navigate(`/music/${id}`);
  };

  return (
    <div className="list-data">
      <p>{text}</p>
      <p onClick={() => goToMusicDetail()}>{name}</p>
    </div>
  );
}

export default ListData;
