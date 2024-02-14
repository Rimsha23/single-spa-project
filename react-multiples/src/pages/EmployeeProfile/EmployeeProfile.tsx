import React,{useState} from "react";
import { Card ,Button} from "antd";
import EditProfileModal from "./editProfileModal";
import { Breadcrumb, Layout, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Content, Footer} = Layout;

const EmployProfile = () =>{
const [name,setName] = useState('Rimsha Malik');
const [email,setEmail] = useState('rimsha@gmail.com');
const [contact,setContact] = useState('+92 300 6827482');
const [iseditModalOpen,setIsEditModalOpen] = useState(false);
const handleShowModal= () =>{
    setIsEditModalOpen(true);
}
const handleOnClose =()=>{
setIsEditModalOpen(false)
}
const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    return(
        <>
        <Layout style={{width:'100%', margin:'15px'}}>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Link to={'/profile'}>
            <Breadcrumb.Item>My Profile</Breadcrumb.Item>
            </Link>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              width:'100%',
              minHeight:'80vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,   
            }}
          >
        <h1>Profile</h1>
        <Card title="Employ Profile" 
        extra={<Button type="primary" onClick={handleShowModal}>
        Edit Profile </Button>} 
         style={{ width: '100%' }}
         >
            <h3>Name:</h3>
            <p>{name}</p>
            <h3>Email:</h3>
            <p>{email}</p>
            <h3>Contact number:</h3>
            <p>{contact}</p>
    </Card>
    
     </div>
     </Content>
     <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
     </Layout>
        <EditProfileModal showModal={iseditModalOpen} 
     onCancel={handleOnClose} 
     name={name}
     email={email} 
     contact={contact} 
     setName={setName}
     setEmail={setEmail}
     setContact={setContact}/>
        </>
    );
}
export default EmployProfile;