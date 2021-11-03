import React from 'react';
import { RouteComponentProps } from 'react-router';

export default function User(props: RouteComponentProps) {
  const {
    location: { hash },
  } = props;

  return <div>User</div>;
}
