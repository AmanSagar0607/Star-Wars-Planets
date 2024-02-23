import React from 'react';

function ResidentList({ residents }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Notable Residents:</h3>
      <ul>
        {residents.map((resident) => (
          <li key={resident.name} className="mb-1">
            {resident.name} - Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentList;
