import React, { useState } from "react";
import { Button, Modal, Input } from "antd";

interface EditProfileModalProps {
  showModal: boolean;
  name?: string;
  email?: string;
  contact?: string;
  onCancel?: () => void;
  setName?: (name: string) => void;
  setEmail?: (email: string) => void;
  setContact?: (contact: string) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  showModal,
  onCancel,
  name,
  email,
  contact,
  setName,
  setEmail,
  setContact,
}) => {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newcontact, setnewContact] = useState(contact);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(newName);
    setEmail(newEmail);
    setContact(newcontact);
    onCancel();
  };

  return (
    <Modal
      title="Edit Profile"
      open={showModal}
      onCancel={onCancel}
      footer={null}
    >
      <div style={{ marginTop: "25px" }}>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <label style={{ fontWeight: "bold" }}>Name:</label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{
              height: "50px",
              width: "90%",
              border: "1px solid",
              borderColor: "rgb(134, 134, 135)",
              margin: "10px",
              paddingLeft: "7px",
              fontSize: "14px",
              color: "#48484a",
            }}
          />
          <label style={{ fontWeight: "bold" }}>Email:</label>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            style={{
              height: "50px",
              width: "90%",
              border: "1px solid",
              borderColor: "rgb(134, 134, 135)",
              margin: "10px",
              paddingLeft: "7px",
              fontSize: "14px",
              color: "#48484a",
            }}
          />
          <label style={{ fontWeight: "bold" }}>Contact:</label>
          <Input
            type="text"
            name="name"
            placeholder="Contact"
            value={newcontact}
            onChange={(e) => setnewContact(e.target.value)}
            style={{
              height: "50px",
              width: "90%",
              border: "1px solid",
              borderColor: "rgb(134, 134, 135)",
              margin: "10px",
              paddingLeft: "7px",
              fontSize: "14px",
              color: "#48484a",
            }}
          />

          <div>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "5px" }}
            >
              Save
            </Button>
            <Button type="default" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
