import NameList from './components/NameList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <NameList />
      </div>
    </>
  );
};

export default App;
