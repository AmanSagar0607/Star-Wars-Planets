import React, { useState, useEffect } from 'react';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentData = await Promise.all(planet.residents.map(async (residentUrl) => {
        const response = await fetch(residentUrl);
        return await response.json();
      }));
      setResidents(residentData);
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="glassmorphism planet-card-container  planet-card rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2 planet-name">{planet.name}</h2>
        <p className="text-gray-700 planet-climate"><span className="font-semibold"> <span className="climate">Climate:</span></span> {planet.climate}</p>
        <p className="text-gray-700 planet-population"><span className="font-semibold"><span className="population">Population:</span></span> {planet.population}</p>
        <p className="text-gray-700 planet-terrain"><span className="font-semibold"><span className="terrain">Terrain:</span></span> {planet.terrain}</p>
      </div>
      <ResidentList residents={residents} />
    </div>
  );
}

export default PlanetCard;
