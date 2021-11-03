import _ from 'lodash';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import axios, { AxiosRequestConfig, Method } from 'axios';
import queryString from 'query-string';

import { getConfig } from 'utils/config';

/**
 * 下载链接接收属性
 */
interface LinkInputProps {
  url: string;
  prefix?: string;
  params?: any;
  children?: React.ReactChild;
  method?: string;
  fileName?: string;
}

/**
 * A标签【输出参数】
 */
interface LinkOutputProps {
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
}

/**
 * 下载链接样式
 */
const LinkStyled = styled.a.attrs({
  className: 'download-link',
})``;

/**
 * get请求，判断正则表达式
 */
const getRegex = /^get$/i;

/**
 * 非get请求，下载资源
 * @param url 请求url
 * @param params 请求参数
 * @param method 请求方法
 */
const getOnClick =
  (url: string, params: any, method: string, pFileName: string | undefined) => () => {
    // ajax 参数类型
    const axiosConfig: AxiosRequestConfig = {
      method: method as Method,
      url,
      data: params || {},
      responseType: 'blob',
    };
    // 发起ajax请求
    axios(axiosConfig).then((res) => {
      // 获取响应数据
      const { data, headers } = res || {};
      // 获取【文件信息头】
      const disposition = _.get(headers, 'content-disposition');
      // 获取【文件名称】
      const fileName =
        decodeURIComponent(_.last(_.split(disposition, '=')) || '') || pFileName || '数据导出.xlsx';
      // 获取【文件内容】
      const content = data as any as BlobPart;
      // 构建文件【二进制内容】
      const blob = new Blob([content]);
      // 如果是非IE下载
      if ('download' in document.createElement('a')) {
        // 非IE下载
        const elink = document.createElement('a');
        elink.download = fileName;
        elink.style.display = 'none';
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); // 释放URL 对象
        document.body.removeChild(elink);
      } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName);
      }
    });
  };

/**
 * 下载链接组件，支持全method类型
 * @param props { url: string;
  prefix?: string;
  params?: any;
  children?: React.Component;
  method?: string;
}
 */
export const DownloadLink: React.FC<LinkInputProps> = (props) => {
  const { url, prefix, params, method, fileName, children } = props;

  // 构建下载链接【属性】
  const attrs = useMemo(() => {
    // 定义返回属性
    const ret: LinkOutputProps = {};
    // 如果不是get 请求
    if (method && !getRegex.test(method)) {
      // 通过点击事件
      ret.onClick = getOnClick(url, params, method, fileName);
    } else {
      let urlStr = url;
      // 如果存在【前缀参数】
      if (prefix) {
        const pre = getConfig(prefix);
        if (!_.includes(urlStr, pre)) {
          urlStr = `${pre}${urlStr}`;
        }
      }
      // 如果存在【参数数据】
      if (params) {
        const ps = queryString.stringify(params);
        if (!_.includes(urlStr, ps)) {
          urlStr = `${urlStr}?${ps}`;
        }
      }
      // 返回超链接属性
      ret.href = urlStr;
      ret.rel = 'noopener noreferrer';
      if (fileName) {
        ret.download = fileName;
      }
    }
    // 返回当前属性
    return ret;
  }, [url, prefix, params, method]);
  // 返回下载链接
  return <LinkStyled {...attrs}>{children}</LinkStyled>;
};
