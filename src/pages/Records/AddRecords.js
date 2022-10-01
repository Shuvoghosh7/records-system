import React, { useState } from 'react';
import { Button, Form, Header, Modal } from 'semantic-ui-react';

const AddRecords = () => {
    const [open, setOpen] = useState(false)
    const handelSubmit = (e) => {
        const a = e.target.name.value
        const b = e.target.lname.value
        console.log(a, b)
    }
    return (
        <div>
            <Modal
                size='tiny'
                closeIcon
                open={open}
                trigger={<Button color='violet'>Add Record</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                    <Form onSubmit={handelSubmit}>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' name='name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' name='lname' />
                        </Form.Field>

                        <Button type='submit' primary>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default AddRecords;