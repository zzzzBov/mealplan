import React, { FC, useContext, useMemo } from 'react';
import {
  Calendar,
  Copyright,
  Heading,
  Layout,
  NavigationContext,
} from './components';
import { INavigator } from './navigation/Navigator';
import { useQueryString } from './hooks/useQueryString';

export interface IAppProps {}

export const App: FC<IAppProps> = () => {
  const navigator = useContext(NavigationContext);
  const [query, setQueryString] = useQueryString(navigator);

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

  const click = () => {
    const m = (((month.getMonth() + 1) % 12) + 1).toString().padStart(2, '0');
    const y = (month.getFullYear() + Number(m === '01'))
      .toString()
      .padStart(4, '0');

    setQueryString(
      new URLSearchParams({
        month: `${y}-${m}`,
      })
    );
  };

  return (
    <Layout
      header={<Heading month={month} />}
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
