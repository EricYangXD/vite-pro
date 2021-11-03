import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  font333: '#333333',
  font666: '#666666',
  colorWhite: '#ffffff',
  colorD9: '#d9d9d9',
  colorE1: '#E1E9FE',
  colorE6: '#E6E6E6',
  colorE7: '#E7EDFD',
  colorE9: '#E9EFFE',
  colorF5: '#F5F8FF',
  color406: '#4067CF',
  color497: '#4972d5',
  colorE5: '#e5e5e5',
  colorC9: '#c9c9c9',
  colorF0: '#f0f0f0',
  colorCCC: '#cccccc',
  colorF85: '#F85858',
  colorF8F: '#F8F8F8',
  colorE5E: '#E5E5E5',
  color4F7: '#4F7BF1',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'PingFang SC Regular', 'Helvetica Neue', 'Monospace Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    font-size: 14px;
    background: #f0f2f5;
    color: ${theme.font333};
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ant-table.ant-table-bordered > .ant-table-container {
    border: 1px solid rgba(81,128,255,0.15);
    border-right: 0;
    border-bottom: 0;
  }
  .ant-table {
    font-size: 12px;
    /* tr:hover{
      background-color: ${theme.colorE7} !important;
    } */
    .ant-table-thead > tr > th {
      padding: 0 6px;
      height: 26px;
      font-weight: bold;
      background-color: ${theme.colorE9} !important;
    }
    .ant-table-tbody > tr > td {
      height: 28px;
      line-height: 12px;
      padding: 0px 6px !important;
      position: relative;
      border-right: 1px solid ${theme.colorE1} !important;
      border-bottom: 1px solid ${theme.colorE1};
    }
    .ant-table-tbody > tr.ant-table-row:nth-of-type(even) {
      background-color: ${theme.colorF5};
    }
  }
  .ant-table-pagination-right {
    justify-content: center;
  }
  .ant-pagination-options-quick-jumper input {
    height: 28px;
    border-radius: 6px;
  }
  .ant-pagination {
    font-size: 14px;
    text-align: center;
    position: relative;
    color: ${theme.font333};
    .ant-pagination-total-text {
      position: absolute;
      left: 0;
    }
    .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
      border-radius: 6px;
    }
    .ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next {
      display: inline-block;
      color: #666;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .ant-pagination-item {
      border-radius: 6px;
      display: inline-block;
      margin-right: 8px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      background-color: ${theme.colorWhite};
      border: 1px solid ${theme.colorD9};
      border-radius: 6px;
      outline: 0;
      cursor: pointer;
      user-select: none;
      &.ant-pagination-item-active {
        a {
          color: ${theme.colorWhite};
        }
        background-color: ${theme.color406};
      }
    }
  }
  .line-title {
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    &::before {
      content: ' ';
      display: inline-block;
      background-color: #4067cf;
      border-radius: 4px;
      width: 4px;
      margin-right: 6px;
      height: 14px;
    }
  }
  .fr {
    float: right;
  }
`;

export default GlobalStyle;

export const AppStyled = styled.div``;

export const Content = styled.div`
  max-width: 1305px;
  min-width: 1080px;
  /* min-height: 600px; */
  min-height: calc(100vh - 134px);
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(195, 200, 205, 0.05);
`;
