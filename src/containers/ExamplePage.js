import * as React from 'react';
import ExampleComponent from '../components/ExampleComponent';

const ExamplePage = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
      <ExampleComponent />
    </div>
  );
};
export default ExamplePage;
