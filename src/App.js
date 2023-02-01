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
  

      <div className="columns-2 md:columns-3 lg:columns-4">
        {news.map(article => (
          <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <img className="w-full h-full rounded-md" src={article.urlToImage}/>
            <div className="absolute inset-0 bg-black left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-60 bg-opacity-90 duration-300">
              <div className="relative">
                <a className="test__link absolute inset-0" target="_blank" href={article.url}></a>
                <h1 className="test__title text-orange-300 text-xs md:text-sm lg:text-xl font-bold mb-3">{article.title}</h1>
              </div>

            </div>
          </div>

        ))}
      </div>

  </>
  );

 
}

export default NewsList;
