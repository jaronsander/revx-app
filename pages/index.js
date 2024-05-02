import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import { useState, useEffect } from 'react';
import { projects } from '../utils/projectsData';

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div className="home">
      <h1>Revenue Accelerator App</h1>
      <p>{data}</p>
    </div>
  );
};

export default Home;
