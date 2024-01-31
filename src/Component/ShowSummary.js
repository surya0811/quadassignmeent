import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import backgroundImage from "../images/2.jpg";

const ShowSummary = () => {
  const [showName, setShowName] = useState('');
  const [summary, setSummary] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setShowName(data.name);
        setSummary(data.summary);
      });
  }, [id]);

  const handleBookTicket = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="container mx-auto h-screen flex justify-center items-center"style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="text-center">
        <div className="text-4xl  font-bold mb-4">{showName}</div>
        <p className="text-l md:text-base lg:text-lg leading-relaxed mb-6 text-black font-semibold">{summary}</p>
        <button
          className="text-white text-2xl font-semibold hover:underline bg-purple-500 rounded px-6 py-3 transition duration-300"
          onClick={handleBookTicket}
        >
          Book Ticket
        </button>
      </div>
    </div>
  );
};

export default ShowSummary;
