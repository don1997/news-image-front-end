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
  

     
<div class="columns-2 md:columns-3 lg:columns-4">
{news.map(article => (

  <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
    <img class="w-full rounded-md" src="https://source.unsplash.com/random/1"/>
    <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
      <div class="relative">
        <a class="test__link absolute inset-0" target="_blank" href="/"></a>
        <h1 class="test__title text-3xl font-bold mb-3">Title post</h1>
        <p class="test__author font-sm font-light">Author</p>
      </div>
      <div class="mt-auto">
        <span class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
      </div>
    </div>
  </div>
        ))}

  </div>


  </>
  );

 
}

export default NewsList;
