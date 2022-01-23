import NameList from './components/NameList';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba';

export type UserType = {
  name: string;
  id: string;
  company: string;
  orderId: string;
  invoicepaid: string;
  invoicePending: string;
};

const App = () => {
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

  const filterByName = (name: string) => {
    if (name.length > 0) {
      if (users && users.length > 0) {
        const newUser = users.filter((user) => user.name.indexOf(name) >= 0);
        setUsers(newUser);
      }
    } else {
      setUsers(JSON.parse(localStorage.users));
    }
  };

  return (
    <>
      <Navbar searchFilterFunction={filterByName} />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <NameList users={users} />
      </div>
    </>
  );
};

export default App;
