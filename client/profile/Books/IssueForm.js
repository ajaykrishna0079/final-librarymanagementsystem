import {Modal} from "antd";
import React from "react";
function IssueForm({open=false,setOpen,selectedBook,setSelectedBook}){
    return(
        <Modal
        title="Issue Form"
        open={open}
        onCancel={()=>setOpen(false)}
        footer={null}
        >
            <div>Issue Form</div>
        </Modal>
    );
}
export default IssueForm;