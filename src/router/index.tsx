import React, { lazy, Suspense, useMemo } from 'react';
import { Route, Switch, Redirect, Link, RouteProps as OriginRouteProps } from 'react-router-dom';
import Loader from 'components/loader';

const Cart = lazy(() => import('pages/cart'));
const Home = lazy(() => import('pages/home'));
const User = lazy(() => import('pages/user'));

interface RouteProps extends OriginRouteProps {
  // 权限
  permission?: string;
  path: string;
  name: string;
}

export const BasePath = '/vite';

const getPath = (p) => `${BasePath}${p}`;

export const routes: RouteProps[] = [
  {
    path: getPath('/cart'),
    component: Cart,
    name: '购物车',
  },
  {
    path: getPath('/home'),
    component: Home,
    name: '主页',
  },
  {
    path: getPath('/user'),
    component: User,
    name: '用户',
  },
];

export default function AppRouter() {
  // const routes = useMemo(() => routesConfig.filter((each) => !each.permission), []);

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map(({ path: routePath, component, exact = false }) => (
          <Route key={routePath} path={routePath} component={component} exact={exact} />
        ))}
        <Route component={Home} />
      </Switch>
    </Suspense>
  );
}
