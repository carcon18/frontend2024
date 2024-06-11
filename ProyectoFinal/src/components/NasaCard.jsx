import { useEffect, useState } from 'react';
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
    <div className="card col-3 m-2" style={{ width: '18rem', overflowY: 'auto', maxHeight: '500px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {apodData && (
        <>
          <img
            src={apodData.url}
            className="card-img-top"
            alt={apodData.title}
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div className="card-body text-center" style={{ padding: '15px', overflowY: 'auto', maxHeight: '250px' }}>
            <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{apodData.title}</h5>
            <p className="card-text" style={{ fontSize: '1rem', marginBottom: '10px' }}>{apodData.date}</p>
            <p className="card-text" style={{ fontSize: '0.875rem', overflowY: 'auto', textOverflow: 'ellipsis', whiteSpace: 'normal', wordWrap: 'break-word' }}>{apodData.explanation}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NasaCard;
