import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/Designer.jpeg'; // Adjust the filename and extension accordingly


const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8"style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <h1 className="text-6xl font-semibold text-uppercase text-center  text-white-800 mb-7">TV SHOWS</h1>
      <div className=" py-8 grid grid-cols-1 md:grid-cols-2  gap-3">
        {shows.map(show => (
          <div key={show.show.id}>
            <Link
              to={`/show/${show.show.id}`}
              className="block bg-white rounded p-2 shadow-md hover:shadow-lg transition duration-300"
            >
              {show.show.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
