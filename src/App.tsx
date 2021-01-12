import React, { FC, useContext, useMemo } from 'react';
import { Calendar, Copyright, Layout, NavigationContext } from './components';
import { INavigator } from './navigation/Navigator';
import { useQueryString } from './hooks/useQueryString';

export interface IAppProps {}

export const App: FC<IAppProps> = () => {
  const navigator = useContext(NavigationContext);
  const [query] = useQueryString(navigator);

  const rawMonthParam = query.get('month');

  const month = useMemo(() => {
    const [_, rawYear, rawMonth] =
      /(\d{4})-(\d{2})/.exec(rawMonthParam ?? '') ?? [];

    if (!rawYear || !rawMonth) {
      return new Date();
    }

    const year = +rawYear;
    const monthIndex = +rawMonth - 1;

    return new Date(year, monthIndex);
  }, [rawMonthParam]);

  const now = new Date();

  const heading = month.toLocaleString(window.navigator.language, {
    month: 'long',
    year: 'numeric',
  });

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
