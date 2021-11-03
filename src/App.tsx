import React, { FC, useEffect } from 'react';
import './app.module.scss';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { UserInfoContextContextProvider } from './UserInfoContext';
import axios from 'axios';
import { environmentVariable } from 'utils';
import AppRouter from './router';
import GlobalStyle, { AppStyled, Content, theme } from './GlobalStyle';

moment.locale('zh-cn');

const App: FC = () => {
  useEffect(() => {
    console.log(`vite-react-cil`);
    console.log(`environmentVariable()`, environmentVariable());
    axios.get('/api/getRoleById').then(({ data }) => console.log(data.data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserInfoContextContextProvider>
        <AppStyled>
          <GlobalStyle />
          <Content>
            <AppRouter />
          </Content>
        </AppStyled>
      </UserInfoContextContextProvider>
    </ThemeProvider>
  );
};

export default App;
