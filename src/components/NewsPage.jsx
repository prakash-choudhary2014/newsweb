


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NewsCard from './NewsCard';

// const NewsPage = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [category, setCategory] = useState('general');

//   const API_KEY = '01cc5300bf964991bc9f5082e72fa8bd';

  
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
//         );
//         setArticles(response.data.articles);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//         setIsLoading(false);
//       }
//     };
//     fetchArticles();
//   }, [category]);


//   //for searching by keywords
//   const handleSearch = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
//       );
//       setArticles(response.data.articles);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };

  
// //for searching by category
//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   return (
//     // Search bar and filter bar
    
//     <div className="news-container">
//       <div className='cat-key'>
//       <form onSubmit={handleSearch}>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search by keywords..."
//             value={searchQuery}
//             onChange={(event) => setSearchQuery(event.target.value)}
//           />
//           <button type="submit" className="search-button">
//             Search
//           </button>
//         </div>
//       </form>

//       <div className="filter-container">
//         <label htmlFor="category">Filter by category:</label>
//         <select id="category" value={category} onChange={handleCategoryChange}>
//           <option value="general">General</option>
//           <option value="business">Business</option>
//           <option value="entertainment">Entertainment</option>
//           <option value="health">Health</option>
//           <option value="science">Science</option>
//           <option value="sports">Sports</option>
//           <option value="technology">Technology</option>
//         </select>
//       </div>

//   </div>
      
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="news-list">
//           {articles.map((article, index) => (
//             <NewsCard
//               key={index}
//               title={article.title}
//               description={article.description}
//               image={article.urlToImage}
//               url={article.url}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('general');

  const API_KEY = 'xY4eld4d3OtYJxdkWH7ZHFemcg5RRUdz5f8B2xLpxlU';
  const BASE_URL = 'https://api.newscatcherapi.com/v2/';

  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}search?q=${category}&lang=en&sort_by=relevancy&page=1`,
          {
            headers: {
              'x-api-key': API_KEY,
            },
          }
        );
        setArticles(response.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, [category]);


  //for searching by keywords
  const handleSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}search?q=${searchQuery}&lang=en&sort_by=relevancy&page=1`,
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
      setArticles(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  //for searching by category
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    // Search bar and filter bar
    
    <div className="news-container">
      <div className='cat-key'>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by keywords..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>

      <div className="filter-container">
        <label htmlFor="category">Filter by category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="technology">Technology</option>
          </select>
          </div>
          </div>

          {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="news-list">
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.summary}
              image={article.media}
              url={article.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;

