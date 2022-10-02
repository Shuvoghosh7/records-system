import React, { useState } from 'react';
import { Form, Button, Modal, Header } from 'semantic-ui-react';

const UploadFile = () => {
    const [open, setOpen] = useState(false)
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
                    <Form action="https://tranquil-fjord-16475.herokuapp.com/api/v1/file/file-uploads" enctype="multipart/form-data" method="post">
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