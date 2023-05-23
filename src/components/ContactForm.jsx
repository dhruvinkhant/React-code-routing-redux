import React, { useState } from 'react';
import { updateFormData } from '../reduxToolkit/slices/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeAllItem, removeSingleItem } from '../reduxToolkit/slices/Todo';

const ContactForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formdata);
  const todoitems = useSelector((state) => state.todo);
  const [itemvalue, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    dispatch(updateFormData(event.target));
  };

  const handleAddItem = () => {
    if (itemvalue === "") {
      alert('Please enter a value');
    } else {
      dispatch(addItem(itemvalue));
      setValue("");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleRemove = (index) => {
    dispatch(removeSingleItem(index));
    console.log("index", index);
  }

  const handleRemoveAllItem = () => {
    dispatch(removeAllItem());
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = todoitems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
      </form>

      <h1>ToDo List</h1>
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Search items"
          value={searchQuery}
          onChange={handleSearch}
          style={{ marginBottom: '10px', padding: '5px' }}
        />
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Enter the Item"
            style={{ marginRight: '10px', padding: '5px' }}
            value={itemvalue}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            style={{ padding: '5px' }}
            onClick={() => handleAddItem()}
          >
            Add Item
          </button>
        </div>
        <button
          style={{ marginBottom: '10px', padding: '5px' }}
          onClick={() => handleRemoveAllItem()}
        >
          Remove All
        </button>
       
        {filteredItems.length > 0 ? filteredItems.map((item, index) => (
          <div style={{ display: 'flex', flexDirection: 'row' }} key={index}>
            <p>{item}</p>
            <button
              style={{ width: 'fit-content', height: 'fit-content' }}
              onClick={() => handleRemove(index)}
            >
              Remove Item
            </button>
          </div>
        )) : <p>No item found</p>}
      </div>
    </>
  );
};

export default ContactForm;
