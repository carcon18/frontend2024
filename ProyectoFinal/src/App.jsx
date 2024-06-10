import { useState } from 'react';
import NasaCard from './components/NasaCard';
import SearchDate from './components/SearchDate';
import './assets/css/index.css';

const App = () => {
  const [dates, setDates] = useState(['2024-06-09']);

  return (
    <div className="container">
      <h1>NASA Astronomy Picture of the Day</h1>
      <hr />
      <SearchDate dates={dates} setDates={setDates} />
      <hr />
      <div className="row">
        {dates.map((date, index) => (
          <NasaCard key={index} date={date} />
        ))}
      </div>
    </div>
  );
};

export default App;
