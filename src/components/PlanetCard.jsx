import React, { useState, useEffect } from 'react';
import ResidentList from './ResidentList';
import { FaCopy } from 'react-icons/fa'; 

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentData = await Promise.all(planet.residents.map(async (residentUrl) => {
          const response = await fetch(residentUrl);
          return await response.json();
        }));
        setResidents(residentData);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, [planet.residents]);

  const copyPlanetInfo = () => {
    const notableResidentsInfo = residents.map(resident => (
      `${resident.name} - Height: ${resident.height}, Mass: ${resident.mass}, Gender: ${resident.gender}`
    )).join('\n');
    
    const infoToCopy = `
      Planet: ${planet.name}
      Climate: ${planet.climate}
      Population: ${planet.population}
      Terrain: ${planet.terrain}
      Notable Residents:
      ${notableResidentsInfo}
    `;
    
    navigator.clipboard.writeText(infoToCopy)
      .then(() => alert('Copied to clipboard'))
      .catch(error => console.error('Error copying to clipboard:', error));
  };

  return (
    <div className="glassmorphism planet-card-container planet-card rounded-lg shadow-md overflow-hidden relative">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2 planet-name">{planet.name}</h2>
        <p className="text-gray-700 planet-climate"><span className="font-semibold">Climate:</span> {planet.climate}</p>
        <p className="text-gray-700 planet-population"><span className="font-semibold">Population:</span> {planet.population}</p>
        <p className="text-gray-700 planet-terrain"><span className="font-semibold">Terrain:</span> {planet.terrain}</p>
      </div>
      <ResidentList residents={residents} />
      
      <button className="copy-button absolute top-0 right-0 mt-2 mr-2" onClick={copyPlanetInfo}>
        <FaCopy size={20} />
      </button>
    </div>
  );
}

export default PlanetCard;
