import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Header, Table } from 'semantic-ui-react';
import AddRecords from './AddRecords';
import './Records.css'
import ShowRecords from './ShowRecords';
const Records = () => {
    const { data: records, isLoading, refetch } = useQuery('records', () => fetch('http://localhost:5000/api/v1/records').then(res => res.json()))
    console.log(records)
    return (
        <div>
            <p className='top-header'>Simple records system</p>
            <div className='record-table'>
                <div className='add-button'>
                    <AddRecords/>
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