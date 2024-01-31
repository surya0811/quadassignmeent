import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import backgroundImage from '../images/1.jpeg';

const BookTicket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    showName: ''
  });

  const { id } = useParams();

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      showName: id
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Navigate programmatically using history.push
    window.location.href = `/show/${id}`;
  };

  return (
    <div className="flex justify-center items-center h-screen"style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="container mx-auto px-8 py-10  rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center text-black-800">Book Ticket for Show</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTicket;
