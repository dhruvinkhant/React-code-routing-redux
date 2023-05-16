import React, { useState } from 'react';
import { updateFormData } from '../reduxToolkit/slices/ContactForm';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const formData = useSelector((state) => state.formdata);
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   textInput: '',
  //   emailInput: '',
  //   passwordInput: '',
  //   checkboxInput: false,
  //   radioInput: '',
  //   selectInput: '',
  //   textareaInput: '',
  // });

  const handleChange = (event) => {
    // const { name, value, type, checked } = event.target;
    // const updatedValue = type === 'checkbox' ? checked : value;

    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: updatedValue,
    // }));
    dispatch(updateFormData(event.target));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text Input:
        <input
          type="text"
          name="textInput"
          value={formData.textInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email Input:
        <input
          type="email"
          name="emailInput"
          value={formData.emailInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Password Input:
        <input
          type="password"
          name="passwordInput"
          value={formData.passwordInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Checkbox Input:
        <input
          type="checkbox"
          name="checkboxInput"
          checked={formData.checkboxInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Radio Input 1:
        <input
          type="radio"
          name="radioInput"
          value="option1"
          checked={formData.radioInput === 'option1'}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Radio Input 2:
        <input
          type="radio"
          name="radioInput"
          value="option2"
          checked={formData.radioInput === 'option2'}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Select Input:
        <select name="selectInput" value={formData.selectInput} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </label>
      <br />

      <label>
        Textarea Input:
        <textarea
          name="textareaInput"
          value={formData.textareaInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
