import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

//Infuse all components wrapped with this Higher Order Component with the serviceScope
export const withServiceScope = (Component: any) => {
  return (props: any) => {
    const appContext = useContext(AppContext);

    return <Component serviceScope={appContext.serviceScope} {...props} />;
  };
};