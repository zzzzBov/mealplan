import React, { FC, useContext, useMemo } from 'react';
import {
  Calendar,
  Copyright,
  Day,
  Edit,
  Heading,
  Layout,
  NavigationContext,
} from './components';
import { INavigator } from './navigation/Navigator';
import { useQueryString } from './hooks/useQueryString';
import { dateFromString, stringFromDate } from './utils';

export interface IAppProps {}

export const App: FC<IAppProps> = () => {
  const navigator = useContext(NavigationContext);
  const [query, setQueryString] = useQueryString(navigator);

  const rawMonthParam = query.get('month');

  const month = useMemo(() => dateFromString(rawMonthParam ?? ''), [
    rawMonthParam,
  ]);

  const now = new Date();

  const setMonth = (date: Date) => {
    const q = new URLSearchParams(query.toString());
    q.set('month', stringFromDate(date));
    setQueryString(q);
  };

  return (
    <Layout
      header={
        <>
          <Heading month={month} />
          <Edit month={month} setMonth={setMonth} />
        </>
      }
      main={<Calendar month={month}>{Day}</Calendar>}
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
