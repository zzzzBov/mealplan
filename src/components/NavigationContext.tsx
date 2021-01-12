import { createContext } from 'react';
import { INavigator } from '../navigation/Navigator';

const noopNavigator: INavigator = {
  get url() {
    return new URL('about:blank');
  },
  addListener() {
    return noopNavigator;
  },
  navigate() {},
  removeListener() {
    return noopNavigator;
  },
  update() {},
};

export const NavigationContext = createContext<INavigator>(noopNavigator);
