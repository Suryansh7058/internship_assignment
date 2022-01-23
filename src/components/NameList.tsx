import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from '@mui/material';
import NameListItem from './NameListItem';

const URL = 'https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba';

export type UserType = {
  name: string;
  id: string;
  company: string;
  orderId: string;
  invoicepaid: string;
  invoicePending: string;
};

const NameList = () => {
  const [users, setUsers] = useState<UserType[] | null>(null);
  useEffect(() => {
    (async () => {
      if (localStorage.getItem('users')) {
        setUsers(JSON.parse(localStorage.users));
      } else {
        const { data } = await axios.get(URL);
        setUsers(data.clients);
        localStorage.setItem('users', JSON.stringify(data.clients));
      }
    })();
  }, []);
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
