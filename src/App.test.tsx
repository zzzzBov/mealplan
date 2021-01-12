import React from 'react';
import { render, screen } from '@testing-library/react';
import { App, AppContext } from './App';

describe(`<App />`, () => {
  it(`should be a function`, () => {
    expect(App).toBeInstanceOf(Function);
  });
});

describe(`<AppContext />`, () => {
  it(`should be a function`, () => {
    expect(AppContext).toBeInstanceOf(Function);
  });
});
