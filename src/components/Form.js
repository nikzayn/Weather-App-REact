import React from 'react';

const Form = props => (
    <form onSubmit = {props.outputWeather}>
      <input type="text" name="city" placeholder="Enter City..." />
      <input type="text" name="country" placeholder="Enter Country..." />
      <button>Fetch Weather</button>
    </form>
);

export default Form;
