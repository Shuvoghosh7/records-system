import React, { useState } from 'react';
import { Form, Button, Modal, Header } from 'semantic-ui-react';

const UploadFile = () => {
    const [open, setOpen] = useState(false)
    const handelSubmit=(e) => {
        e.preventDefault()
        const x = e.target.userName.value
        const y = e.target.image.value
     
        fetch("http://localhost:5000/api/v1/file/file-uploads", {
            method: "POST",
            headers: {
                " Content-Type": "application/json"
            },
            body: JSON.stringify({ x, y })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })

    }
    return (
        <div className='file-upload'>
            <h1>Upload file</h1>
            <Modal
                size='tiny'
                closeIcon
                open={open}
                trigger={<Button color='violet'>Upload file</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header icon='archive' content='Add New File'/>
                <Modal.Content>
                    <Form action="http://localhost:5000/api/v1/file/file-uploads" enctype="multipart/form-data" method="post">
                        <Form.Field error>
                            <label>Image</label>
                            <input type="file" placeholder='Last Name' name='image' />
                        </Form.Field>

                        <Button type='submit' primary >Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default UploadFile;