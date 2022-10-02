import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Form, Header, Loader, Modal, Table } from 'semantic-ui-react';
import './Records.css'
import ShowRecords from './ShowRecords';
const Records = () => {
    const [open, setOpen] = useState(false)
    const { data: records, isLoading, refetch } = useQuery('records', () => fetch('http://localhost:5000/api/v1/records').then(res => res.json()))
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
                e.target.reset();
                refetch()
                
            })
    }
    if (isLoading) {
        <Loader active inline='centered' />
    }

    return (
        <div>
            <p className='top-header'>Simple records system</p>
            <div className='record-table'>
                <div className='add-button'>
                    {/* Modal for add new record */}
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
                                    <input placeholder='First Name' name='name' />
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
                                    <input placeholder='Last Name' name='address' />
                                </Form.Field>

                                <Button type='submit' primary >Submit</Button>
                            </Form>
                        </Modal.Content>
                    </Modal>
                </div>

                <Table compact celled definition selectable >
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell />
                            <Table.HeaderCell >Name</Table.HeaderCell>
                            <Table.HeaderCell >Email</Table.HeaderCell>
                            <Table.HeaderCell >Website</Table.HeaderCell>
                            <Table.HeaderCell >Address</Table.HeaderCell>
                            <Table.HeaderCell >Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            records?.map((record, index) =>
                                <ShowRecords
                                    record={record}
                                    index={index}
                                    refetch={refetch}
                                />
                            )
                        }
                    </Table.Body>
                </Table>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Records;