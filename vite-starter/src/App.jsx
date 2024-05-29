import React from 'react';
import './App.css';

function App() {
  const [btnColor, setBtnColor] = React.useState('red');
  const [btnText, setBtnText] = React.useState('Change to blue');

  const handleChange = () => {
    if (btnColor === 'red') {
      setBtnColor('blue');
      setBtnText('Change to red');
    } else {
      setBtnColor('red');
      setBtnText('Change to blue');
    }
  };

  return (
    <>
      <button className={btnColor} onClick={handleChange}>
        {btnText}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
