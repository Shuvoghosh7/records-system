import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';


const ShowRecords = ({ record,index }) => {
    const { name, email, website, _id,address } = record
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
        <Button inverted color='green'><Icon name='edit outline'/></Button>
           <Button inverted color='red'> <Icon name='delete'/></Button>
        </Table.Cell>
      </Table.Row>
    );
};

export default ShowRecords;