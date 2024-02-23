import React, { useState, useEffect } from 'react';
import PlanetCard from '../components/PlanetCard';
import Pagination from '../components/Pagination';
import { getPlanets } from '../services/swapiService';

function PlanetsPage() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // State for loading animation

  useEffect(() => {
    fetchPlanets();
  }, [currentPage]);

  const fetchPlanets = async () => {
    setLoading(true); // Set loading to true when fetching data
    const response = await getPlanets(currentPage);
    setPlanets(response.results);
    setTotalPages(response.total_pages);
    setLoading(false); // Set loading to false after data is fetched
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Star Wars Planets Directory</h1>
      {loading ? ( // Display loading animation while loading is true
        <div className="loading-container">
          <div className="loading-spinner"></div> {/* Apply the loading-spinner class here */}
        </div>
      ) : (
        <>
          {planets.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default PlanetsPage;
