import React from 'react';
import { RouteComponentProps } from 'react-router';

export default function Cart(props: RouteComponentProps) {
  const {
    location: { hash },
  } = props;

  return <div>Cart</div>;
}
