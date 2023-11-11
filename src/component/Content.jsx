import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  BellOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ListData from "../store/ListData";
import { useEffect, useState } from "react";
import ButtonAdmin from "../admin/ButtonAdmin";
import getPostApiPopularRadio from "../api/postApiPopularRadio";
import { toast } from "react-toastify";
import {
  getDataPopularArtist,
  getDataPopularRadio,
  setDataPopularArtist,
  setDataRadio,
} from "../store/Reducer";
import { Link, useNavigate } from "react-router-dom";
import getPostApiPopularArtist from "../api/postApiArtist";
import Loading from "./Loading";
import NoData from "./NoData";

function Header() {
  //api
  const [postsPopularArtist, setPopularArtist] = useState([]);
  const [postsPopularRadio, setPopularRadio] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // nó ra rỗng ă anh thấy không
  const DataMusic = useSelector(getDataPopularArtist); // như v là anh có thể lấy state trong reducer ra được nè
  const dataPopularRadio = useSelector(getDataPopularRadio);
  const navigate = useNavigate();

  const getAllMusic = async () => {
    const response = await getPostApiPopularArtist.getAll();
    // sử dụng dispatch để thay up data mới vào state
    dispatch(setDataPopularArtist(response.data)); // cái này anh nên để trong call api để cho khi vừa call có dữ liệu mới cái nó tự đẩy lên luôn
    // localStorage.setItem("PopularArtist", JSON.stringify(response.data))
    setPopularArtist(response.data);
  };
  useEffect(() => {
    // JSON.stringify(localStorage.setItem("PopularArtist", []));
    getAllMusic();
  }, []);

  ///
  const getPopularRadio = async () => {
    const response = await getPostApiPopularRadio.getAllRadio();
    dispatch(setDataRadio(response.data));
    // const newData = JSON.parse(localStorage.getItem("musicData"));
    // localStorage.setItem("musicData", JSON.stringify(response.data))
    // dispatch(setPopularRadio(response))
    setPopularRadio(response.data);
    // Sử dụng dispatch để gửi dữ liệu mới vào Redux store
  };
  useEffect(() => {
    // JSON.stringify(localStorage.setItem("musicData", []));
    getPopularRadio();
  }, []);

  //delete ARTISTS
  const deleteMusic = async (id) => {
    try {
      setIsLoading(true);
      const item = await getPostApiPopularArtist.delete(id);
      getAllMusic();
      // const del = item.filter((element)=>element.id !== id) sử dụng ở data cứng
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      toast.success("bạn đã xóa thành công");
    } catch (error) {
      toast.error("xóa không thành công");
    }
  };

  //DELETE RADIO
  const deleteRadio = async (id) => {
    try {
      const item = await getPostApiPopularRadio.delete(id);
      getPopularRadio();
      toast.success("xóa thành công");
    } catch (error) {
      toast.error("xóa không thành công");
    }
  };

  const cancel = (e) => {
    message.error("Click on No");
  };
  const handleDel = () => {
    setIsConfirm(!isConfirm);
  };
  return (
    <header>
      <div className="header-menu">
        <div className="header-menu-icon">
          <LeftOutlined className="header-menu-icon-left" />
          <RightOutlined className="header-menu-icon-right" />
        </div>
        <div className="waviy">
          <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>P</span>
          <span style={{ "--i": 3 }}>O</span>
          <span style={{ "--i": 4 }}>T</span>
          <span style={{ "--i": 5 }}>I</span>
          <span style={{ "--i": 6 }}>F</span>
          <span style={{ "--i": 7 }}>Y</span>
        </div>
        <div className="header-menu-item">
          <Button danger>
            <a href="https://www.spotify.com/vn-vi/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button">
              Explore Premium
            </a>
          </Button>
          <Button type="primary" danger>
            <ArrowDownOutlined />
            Install App
          </Button>
          <BellOutlined
            className="btn"
            style={{ color: "#ffffff", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="header-music">
        <div className="Show">
          <h3>Popular radio</h3>
          <p>Show all</p>
        </div>

        <div className="mobile-radio">
          {dataPopularRadio.length === 0 && <NoData />}
          {dataPopularRadio.map((item) => {
            return (
              <div key={item.id}>
                <ListData
                  text={
                    <ul>
                      <li>
                        <ul>
                          <img
                            src={item.image}
                            alt="ảnh"
                            width={180}
                            height={160}
                            style={{ borderRadius: "10px" }}
                          />
                          <li>{item.nameMusic}</li>
                          <li>{item.author}</li>
                        </ul>
                        <div className="radio">
                          <ButtonAdmin
                            name="edit"
                            color="primary"
                            clickBtn={() =>
                              navigate(`/admin/radio/${item.id} `)
                            } //radio là type từ path
                          />

                          <Popconfirm
                            visible={isConfirm}
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => deleteRadio(item.id)}
                            onCancel={cancel}
                          >
                            <Button danger>Delete</Button>
                          </Popconfirm>
                        </div>
                      </li>
                    </ul>
                  }
                />
              </div>
            );
          })}
        </div>
        {isLoading && <Loading />}
        <div className="popular-artists">
          <h3>Popular artists</h3>
          <p>Show all</p>
        </div>
        <div className="mobile-artists">
          {DataMusic.length === 0 && <NoData />}
          {DataMusic.map((item) => {
            return (
              <div key={item.id}>
                <ListData
                  text={
                    <>
                      <ul>
                        <div class="box-zoom-out">
                          <img
                            src={item.image}
                            alt="MTP"
                            width={150}
                            height={160}
                          />
                        </div>
                        <li>{item.nameMusic}</li>
                        <li>{item.author}</li>
                      </ul>
                      <div className="icon-btn-edit">
                        <ButtonAdmin
                          name="edit"
                          color="primary"
                          clickBtn={() => navigate(`/admin/artist/${item.id}`)} //artist là type từ path
                        />
                        <Popconfirm
                          visible={isConfirm}
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          okText="Yes"
                          cancelText="No"
                          onConfirm={() => deleteMusic(item.id)}
                          onCancel={cancel}
                        >
                          <Button danger>Delete</Button>
                        </Popconfirm>
                        <Link
                          to={`/spotify-popularRadio/${item.id}`}
                          className="icon-right"
                        >
                          <ArrowRightOutlined />
                        </Link>
                      </div>
                    </>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
export default Header;
