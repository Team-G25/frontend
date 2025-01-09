import React from 'react';
import Button from './components/common/Button/Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Emotion Styled Button Example</h1>
      <Button onClick={handleClick}>Click Me</Button>
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    </div>
  );
};

export default App;
