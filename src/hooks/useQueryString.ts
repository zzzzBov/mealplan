import { useCallback, useEffect, useState } from 'react';
import { INavigator, INavigatorListener } from '../navigation/Navigator';

interface IQueryStringHook {
  (navigator: INavigator): [
    URLSearchParams,
    (queryString: URLSearchParams) => void
  ];
}

export const useQueryString: IQueryStringHook = (navigator: INavigator) => {
  const [queryString, setSearchParams] = useState(navigator.url.searchParams);

  useEffect(() => {
    const listener: INavigatorListener = ({ url }) => {
      setSearchParams(url.searchParams);
    };
    navigator.addListener('navigate', listener);
    return () => {
      navigator.removeListener('navigate', listener);
    };
  }, [navigator]);

  const setQueryString = useCallback(
    (queryString: URLSearchParams) => {
      navigator.navigate(new URL(`?${queryString.toString()}`, navigator.url));
    },
    [navigator]
  );

  return [queryString, setQueryString];
};
