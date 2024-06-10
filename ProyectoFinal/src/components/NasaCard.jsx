import React, { useEffect, useState } from 'react';
import { fetchAPOD } from '../api/nasaApi';

const NasaCard = ({ date }) => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAPOD = async () => {
      try {
        const data = await fetchAPOD(date);
        setApodData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error('Error fetching APOD data:', error);
      }
    };

    getAPOD();
  }, [date]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card col-3 m-2" style={{ width: '18rem' }}>
      {apodData && (
        <>
          <img
            src={apodData.url}
            className="card-img-top"
            alt={apodData.title}
            style={{ height: '200px', width: '200px', margin: 'auto' }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{apodData.title}</h5>
            <p className="card-text">{apodData.date}</p>
            <p className="card-text">{apodData.explanation}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NasaCard;
