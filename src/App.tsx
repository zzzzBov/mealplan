import React, { FC, useContext, useState } from 'react';
import { Calendar, Copyright, Layout, NavigationContext } from './components';
import { INavigator } from './navigation/Navigator';
import { useQueryString } from './hooks/useQueryString';

export interface IAppProps {}

export const App: FC<IAppProps> = () => {
  const now = new Date();

  const heading = month.toLocaleString(window.navigator.language, {
    month: 'long',
    year: 'numeric',
  });

  const navigator = useContext(NavigationContext);

  const [query] = useQueryString(navigator);

  return (
    <Layout
      header={<h1>{heading}</h1>}
      main={<Calendar month={month} />}
      footer={<Copyright date={now} />}
    />
  );
};

export interface IAppContextProps {
  navigator: INavigator;
}

export const AppContext: FC<IAppContextProps> = ({ children, navigator }) => {
  return (
    <React.StrictMode>
      <NavigationContext.Provider value={navigator}>
        {children}
      </NavigationContext.Provider>
    </React.StrictMode>
  );
};
