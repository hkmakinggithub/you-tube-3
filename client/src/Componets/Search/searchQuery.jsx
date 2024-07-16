import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LeftSlifBar from '../LeftSlidBar/LeftSlifBar';
import { fetchVideos } from '../../services/apiService';

const searchQuery = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const results = await fetchVideos(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <>
      <div className='conatienr_home_page'>
        <LeftSlifBar />
        <div className='conatienr_home_page_1'>
          <div className="video-list">
            {searchResults.map(video => (
              <div key={video.id.videoId} className="video-item">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default searchQuery;
