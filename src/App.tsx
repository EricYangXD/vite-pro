import React, { FC, useEffect } from 'react';
import './app.module.scss';
import axios from 'axios';

const App: FC = () => {
  useEffect(() => {
    console.log(`vite-react-cil`);

    axios.get('/api/getRoleById').then(({ data }) => console.log(data.data));
  }, []);

  return (
    <div>
      <h2>Welcome to vite-react-cil</h2>
    </div>
  );
};

export default App;
