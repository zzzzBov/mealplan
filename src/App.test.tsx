import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe(`<App />`, () => {
  it(`should be a function`, () => {
    expect(App).toBeInstanceOf(Function);
  });
});
