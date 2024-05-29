import React from 'react';
import './App.css';

function App() {
  const [btnColor, setBtnColor] = React.useState('red');
  const [btnText, setBtnText] = React.useState('Change to blue');
  const [isDisabled, setIsDisabled] = React.useState(false);
  const className = isDisabled ? 'gray' : btnColor;

  const handleChange = () => {
    if (btnColor === 'red') {
      setBtnColor('blue');
      setBtnText('Change to red');
    } else {
      setBtnColor('red');
      setBtnText('Change to blue');
    }
  };
  const handleCheckboxChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <button
        className={className}
        onClick={handleChange}
        disabled={isDisabled}
      >
        {btnText}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
