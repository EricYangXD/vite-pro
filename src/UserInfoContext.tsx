import React, { createContext, useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import axios from 'utils/api';
import { Spin, Modal } from 'antd';

export const UserInfoContextContext = createContext({});

export const UserInfoContextContextProvider = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [mdLoading, setMdLoading] = useState(true);

  const getUserPrivList = async () => {
    try {
      await axios.get('api/login').then(({ data }) => console.log(data.data));
    } catch (err) {
      Modal.confirm({
        title: '提示',
        content: '该用户未登录',
        onOk: () => {
          window.location.href = window.location.origin;
        },
      });
    }
    setLoading(false);
    setMdLoading(false);
  };

  useEffect(() => {
    getUserPrivList();
  }, []);

  if (loading || mdLoading) {
    return null;
  }

  return (
    <UserInfoContextContext.Provider value={{}}>{props.children}</UserInfoContextContext.Provider>
  );
};
