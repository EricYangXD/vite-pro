import React from 'react';
import { RouteComponentProps } from 'react-router';

export default function Home(props: RouteComponentProps) {
  const {
    location: { hash },
  } = props;

  return <div>Home</div>;
}
