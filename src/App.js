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




    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>


<nav class="top-0 py-8 relative z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-blueGray-800">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
      <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="../../index.html">News Image</a><button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onclick="toggleNavbar('example-collapse-navbar')">
        <i class="text-white fas fa-bars"></i>
      </button>
    </div>
    <div class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800" id="example-collapse-navbar">
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
        
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
        <li class="inline-block relative">
          <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="demo-pages-dropdown">
            <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
              Admin Layout
            </span>
            <a href="../admin/dashboard.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Dashboard
            </a>
            <a href="../admin/settings.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Settings
            </a>
            <a href="../admin/tables.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Tables
            </a>
            <a href="../admin/maps.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Maps
            </a>
            <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
            <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
              Auth Layout
            </span>
            <a href="./login.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Login
            </a>
            <a href="./register.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Register
            </a>
            <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div>
            <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
              No Layout
            </span>
            <a href="../landing.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Landing
            </a>
            <a href="../profile.html" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
              Profile
            </a>
          </div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


      <div class="scolumns-2 md:columns-3 lg:columns-4">
        {elements}
      </div>
      

<section class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Donald McLaughlin. 
        </p>
    </div>
</section>



    </>
  );


}

export default NewsList;
