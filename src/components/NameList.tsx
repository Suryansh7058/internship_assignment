import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from '@mui/material';
import NameListItem from './NameListItem';
import { UserType } from '../App';

type Props = {
  users: UserType[] | null;
};

const NameList = ({ users }: Props) => {
  return (
    <List
      sx={{
        width: '90%',
        maxWidth: '40rem',
        bgcolor: 'background.paper',
        marginTop: '10rem',
      }}
    >
      {users &&
        users.map((user) => (
          <NameListItem
            key={user.id}
            name={user.name}
            id={user.id}
            company={user.company}
            orderId={user.orderId}
            invoicepaid={user.invoicepaid}
            invoicePending={user.invoicePending}
          />
        ))}
    </List>
  );
};

export default NameList;
