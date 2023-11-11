import {
  HomeOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./SearchMusic";
function SlideBar() {
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    id: "",
    name: "",
    singer: "",
    image: "",
  });
  const [dataForm, setDataForm] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // const handleChange = (e) => {
  //   setFormData({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  useEffect(() => {
    document.title = dataForm;
    console.log(dataForm);
  });
  const handleOk = (e) => {
    setDataForm([...dataForm, form]);
    setIsModalOpen(false);
    setFormData("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //image
  const handleEdit = () => {
    navigate("/admin");
  };
  //search
  const handleButton = () => {
    setIsSearch(!isSearch);
  };
  return (
    <div>
      <div className="slide-bar">
        <div>
          <div className="slide-bar-home slide-home-item">
            <HomeOutlined />
            <button onClick={handleEdit} className="btn-home">
              ADMIN
            </button>
          </div>
          <div className="slide-bar-home">
            <SearchOutlined onClick={handleButton} />
            <a>SEARCH</a>
          </div>
          {isSearch && <Search value={isSearch} />}
          {/* Nếu isSearch có giá trị true, thì thành phần <Search /> sẽ được hiển thị, còn nếu isSearch là false, thì <Search /> sẽ bị ẩn đi. */}
        </div>
        <div>
          <div>
            <div className="create-library">
              <div className="library">
                <MenuUnfoldOutlined />
                <h3>Your Library</h3>
              </div>
              <div className="library">
                <PlusOutlined />
                <RightOutlined />
              </div>
            </div>
            <div>
              <div className="create-btn create-btn-playlist">
                <h4>Create your first playlist</h4>
                <p>It's easy, well'll you</p>
                <Button type="primary" onClick={showModal}>
                  Tiêu đề playlist
                </Button>
              </div>
              <div className="create-btn create-btn-playlist">
                <h4>Let's find some podcasts to follow</h4>
                <p>It's easy, well'll you</p>
                <Button type="primary">Browse podcasts</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalOpen} // Sử dụng thuộc tính `visible` để hiển thị modal
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>Title</label>
        <TextArea
          placeholder="Autosize height based on content lines"
          autoSize
          // name="id" // Sử dụng thuộc tính `name` để xác định trường tương ứng trong state
          value={dataForm} // Liên kết giá trị với state
          onChange={(e) => setDataForm(e.target.value)}
        />
        {/* <label>Image</label>
        <br />
        <Upload {...props}>
          <Button
            icon={<UploadOutlined />}
            name="image"
            value={form.image}
            onChange={handleChange}
          >
            Upload png only
          </Button>
        </Upload>

        <label>name</label>
        <TextArea
          placeholder="Autosize height based on content lines"
          autoSize
          name="name" // Sử dụng thuộc tính `name` để xác định trường tương ứng trong state
          value={form.name} // Liên kết giá trị với state
          onChange={handleChange}
        />
        <label>singer</label>
        <TextArea
          placeholder="Autosize height based on content lines"
          autoSize
          name="singer" // Sử dụng thuộc tính `name` để xác định trường tương ứng trong state
          value={form.singer} // Liên kết giá trị với state
          onChange={handleChange}
        /> */}
      </Modal>
      <div style={{ zIndex: "999" }}>
        {/* {dataForm.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li style={{ color: "red", zIndex: "999" }}>{item.id}</li>
              </ul>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
export default SlideBar;
// // <ul>
// <li style={{color:'#ffffff',zIndex:'999', paddingTop:'500px'}}>{dataForm.id}</li>
// <li style={{color:'red',zIndex:'999'}}>{dataForm.name}</li>
// </ul>
