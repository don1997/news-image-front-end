import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3bc498625c324399abae4f472f7fa3af`)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error(error));

  }, []);




  return (

    <>

    <div className="showcase">
        <div className="overlay px-0 bg-stone-800">
          <h1 className="text-xl font-bold text-white
          text-center mb-4">News-Text</h1>
        </div>
      </div>
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p className="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
    <p className="text-gray-500 text-lg">
      React and Tailwind CSS in action
    </p>
  </div>
  </>
  );

 
}

export default NewsList;
