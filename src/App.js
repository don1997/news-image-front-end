import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://news-image-backend.onrender.com`)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error(error));

  }, []);

  
  const elements = news.map(article => (
    
    <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
      <img class="w-full h-full rounded-md" src={article.urlToImage}/>
      <div class="absolute inset-0 bg-black left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-60 bg-opacity-90 duration-300">
        <div class="relative">
          <a class="test__link absolute inset-0" target="_blank" href={article.url}></a>
          <h1 class="test__title text-orange-300 text-xs md:text-sm lg:text-xl font-bold mb-3">{article.title}</h1>
        </div>
      </div>
    </div>
  ));
  
  return (
    <>
      <div class="columns-2 md:columns-3 lg:columns-4">
        {elements}
      </div>
    </>
  );
  
 
}

export default NewsList;
