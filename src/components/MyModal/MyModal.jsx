import React from "react";
import styles from './MyModal.module.css';
import { Modal } from 'antd';

const MyModal = ({children, visible, setVisible}) => {

    const handleOk = () => {
        setVisible(false);
    };
    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Modal open={visible} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    )
}

export default MyModal;