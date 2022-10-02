import React, { useState } from 'react';
import { Button, Form, Header, Icon, Modal, Table } from 'semantic-ui-react';


const ShowRecords = ({ record,index,refetch }) => {
   const [open, setOpen] = useState(false)
    const { name, email, website, _id,address } = record

    const updateRecord=(e)=>{
      const name = e.target.name.value
        const email = e.target.email.value
        const website = e.target.website.value
        const address = e.target.address.value
        console.log(name, email,website,address)
        fetch(`http://localhost:5000/api/v1/records/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify({name, email,website,address})
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
    }
    return (
        <Table.Row textAlign='center'>
        <Table.Cell collapsing>
          {index+1}
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{website}</Table.Cell>
        <Table.Cell>{address}</Table.Cell>
        <Table.Cell positive>
        <Button inverted color='green'>
        <Modal
                size='tiny'
                closeIcon
                open={open}
                trigger={<Button icon size='mini' color='green'><Icon name='edit outline'/></Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header icon='archive' content='Update Records' />
                <Modal.Content>
                    <Form onSubmit={updateRecord}>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='First Name' name='name' defaultValue={name}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Last Name' name='email' defaultValue={email}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Website</label>
                            <input placeholder='Last Name' name='website' defaultValue={website}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Address</label>
                            <input placeholder='Last Name' name='address' defaultValue={address}/>
                        </Form.Field>

                        <Button type='submit' primary >Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </Button>
           <Button inverted color='red' size='big' > <Icon name='delete'/></Button>
        </Table.Cell>
      </Table.Row>
    );
};

export default ShowRecords;