import React, { useState } from 'react';
import { Button, Form, Header, Modal } from 'semantic-ui-react';

const AddRecords = () => {
    const [open, setOpen] = useState(false)
    const handelSubmit = (e) => {
        const name = e.target.name.value
        const email = e.target.email.value
        const website = e.target.website.value
        const address = e.target.address.value
        console.log(name, email,website,address)
        fetch("http://localhost:5000/api/v1/records", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email,website,address })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
                window.location.reload(false);
            })
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
                <Header icon='archive' content='Add New Records' />
                <Modal.Content>
                    <Form onSubmit={handelSubmit}>
                        <Form.Field error>
                            <label>Name</label>
                            <input placeholder='First Name' name='name'/>
                        </Form.Field>
                        <Form.Field error>
                            <label>Email</label>
                            <input placeholder='Last Name' name='email' />
                        </Form.Field>
                        <Form.Field error>
                            <label>Website</label>
                            <input placeholder='Last Name' name='website' />
                        </Form.Field>
                        <Form.Field error>
                            <label>Address</label>
                            <input placeholder='Last Name' name='address'/>
                        </Form.Field>

                        <Button type='submit' primary >Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default AddRecords;