import { Col, Form, Input, Row, Card, Button, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../component/Loading";
import { useNavigate, useParams } from "react-router";
import getPostApiPopularRadio from "../api/postApiPopularRadio";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import getPostApiPopularArtist from "../api/postApiArtist";
const AdminAntd = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("popularRadio");
  const { id, type } = useParams(); //luồng thứ 1 để lấy ra id và value của edit, id và type được lấy từ path
  const navigate = useNavigate();
  const clearForm = () => {
    form.resetFields();
  };
  const nameRef = useRef();
  const createMusic = async (value) => {
    value.selectedOption = selectedOption; // Thêm giá trị đã chọn từ Select vào dữ liệu
    console.log(value);
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    try {
      setIsLoading(true);
      if (selectedOption === "popularArtist") {
        const res = await getPostApiPopularArtist.create(value);
      } else if (selectedOption === "popularRadio") {
        const ress = await getPostApiPopularRadio.create(value);
      }
      toast.success("add product music success");
      clearForm();
      navigate("/");
    } catch (error) {
      toast.error("error product");
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateMusic = async (value) => {
    value.selectedOption = selectedOption;
    setIsLoading(true);
    console.log(value);
    try {
      setIsLoading(true);
      if (selectedOption === "popularArtist") {
        await getPostApiPopularArtist.update(value, id);
        toast.success("thanh cong");
        navigate("/");
      } else if (selectedOption === "popularRadio") {
        await getPostApiPopularRadio.update(value, id);
        toast.success("thanh cong");
        navigate("/");
      }
    } catch (error) {
      toast.error("error...!");
      setIsLoading(false);
    }
  };
  const onsubmit = async (value) => {
    if (id) {
      updateMusic(value);
    } else {
      createMusic(value);
    }
  };

  //lấy value radio
  const getMusicRadio = async () => {
    try {
      setIsLoading(true);
      const { data } = await getPostApiPopularRadio.getDetail(id);
      form.setFieldsValue(data);
      setSelectedOption(data.selectedOption); // Đặt giá trị của selectedOption từ dữ liệu bản ghi
    } catch (error) {
      toast.error("lỗi");
    } finally {
      setIsLoading(false);
    }
  };

  //lấy value Artist
  const getMusicArtist = async () => {
    //luồng 3
    try {
      setIsLoading(true);
      const { data } = await getPostApiPopularArtist.getDetail(id);
      form.setFieldsValue(data); // lấy values của id
      setSelectedOption(data.selectedOption); // Đặt giá trị của selectedOption từ dữ liệu bản ghi
    } catch (error) {
      toast.error("lỗi");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // luồng thứ 2 chạy ef xem id có tồn tại ko nếu id tồn tại thì sẽ chạy lên luồng 3
    if (id) {
      if (type == "radio") {
        //nếu type === với type admin/radio thì...
        getMusicRadio();
      } else {
        getMusicArtist();
      }
    } else {
      setSelectedOption("popularRadio");
    }
  }, [id, type]);

  return (
    <div className="form-container">
      {isLoading && <Loading />}
      <Card
        className="card"
        title={id ? "Edit Music" : "Add new Music"}
        style={{ margin: "0 auto" }}
      >
        <Form layout="vertical" form={form} onFinish={onsubmit}>
          <Row>
            <Col span={12}>
              <Form.Item
                name="nameMusic"
                label="name"
                rules={[
                  { required: true, message: "Please input your name music" },
                  {
                    min: 10,
                    message: "phải trên 10 kí tự",
                  },
                  // {
                  //   max: 15,
                  //   message: "phải dưới 15 kí tự",
                  // },
                ]}
              >
                <Input placeholder="Nhập tên bài hát" ref={nameRef} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="author" label="author">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="detail" label="detail">
                <Input.TextArea />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="image"
                label="image"
                rules={[{ required: true, message: "Please input your img" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="audio"
                label="audio"
                rules={[{ required: true, message: "Please input your audio" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Select
                  value={selectedOption}
                  style={{ width: 120 }}
                  options={[
                    { value: "popularRadio", label: "popularRadio" },
                    { value: "popularArtist", label: "popularArtist" },
                  ]}
                  onChange={(value) => setSelectedOption(value)}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Link to={"/"} style={{ color: "red" }}>
            <LeftOutlined />
            Quay lại trang home.
          </Link>
        </Form>
      </Card>
    </div>
  );
};

export default AdminAntd;
