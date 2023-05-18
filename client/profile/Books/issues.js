import React from 'react';
import {Modal} from 'antd'
function Issues({open=false,setOpen,selectedBook})
{
    return(
        <Modal title="Issues" open={open} onCancel={()=>setOpen(false)}
        footer={null}
        width={1000}
        >
            <div>Issues List</div>
        </Modal>
    );
}
export default Issues;