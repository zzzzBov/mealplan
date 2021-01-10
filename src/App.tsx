import React from 'react';
import { Calendar, Copyright, Layout } from './components';

function App() {
  const now = new Date();
  return (
    <Layout
      header={<h1>Hello, World!</h1>}
      main={<Calendar month={now} />}
      footer={<Copyright date={now} />}
    />
  );
}

export default App;
