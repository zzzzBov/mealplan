import { useEffect, useState } from 'react';
import { INavigator, INavigatorListener } from '../navigation/Navigator';

export const useQueryString = (navigator: INavigator) => {
  const [searchParams, setSearchParams] = useState(navigator.url.searchParams);

  useEffect(() => {
    const listener: INavigatorListener = ({ url }) => {
      setSearchParams(url.searchParams);
    };
    navigator.addListener('navigate', listener);
    return () => {
      navigator.removeListener('navigate', listener);
    };
  }, [navigator]);

  return [searchParams];
};
