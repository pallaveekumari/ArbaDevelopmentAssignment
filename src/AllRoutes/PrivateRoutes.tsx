import React from 'react';
import { Route, Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children: React.ReactNode;
  path: string;
  [rest: string]: any;
};

const PrivateRoute = ({ isAuthenticated, children, ...rest }: PrivateRouteProps) => {
  const renderRoute:any = (props: any) => {
    if (isAuthenticated) {
      return children;
    } else {
      return (
        <Navigate
          to={{
            pathname: '/login',
            search: `?redirect=${props.location.pathname}`,
          }}
        />
      );
    }
  };

  return <Route {...rest} element={renderRoute} />;
};

export default PrivateRoute;
