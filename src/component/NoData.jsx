import { Button, Empty } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const NoData = () => {
    const navigate  = useNavigate()
    const handleCreate = () =>{
        navigate('/admin')
    }
  return (
    <div>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
             <a href="#API">No Data</a>
          </span>
        }
      >
        <Button type="primary" onClick={handleCreate}>Create Now</Button>
      </Empty>
    </div>
  );
};

export default NoData;
