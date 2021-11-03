import React from 'react';
// import EmptySvg from 'assets/empty-state.svg';
import { StyledContainer } from './style';

interface Props {
  title?: string;
}

const Empty = (props: Props) => {
  const { title = '暂无数据' } = props;
  return (
    <StyledContainer>
      {/* <img className="empty-svg" src={EmptySvg} alt="empty" /> */}
      <div className="empty-title">{title}</div>
    </StyledContainer>
  );
};

export default Empty;
