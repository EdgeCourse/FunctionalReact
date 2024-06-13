import React, { useState, useEffect } from 'react';

// Custom Hooks

const useFetchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        // Replace with API endpoint
        // const response = await fetch('your-api-endpoint/players'); 
        // const data = await response.json();
        setPlayers(initialPlayers); // <-- Use initial data for now
      } catch (error) {
        console.error('Error fetching player data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayersData();
  }, []);

  return { players, loading };
};

const useFilterPlayers = (players, filter) => {
  return players.filter(player => 
    player.name.toLowerCase().includes(filter.toLowerCase())
    // Add other filter criteria as needed (e.g., position, age)
  );
};

const useSortPlayers = (players, sortOrder) => {
  return [...players].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};

// Main Component
function PlayerSearch() {
  const { players, loading } = useFetchPlayers();
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredPlayers = useFilterPlayers(players, filter);
  const sortedPlayers = useSortPlayers(filteredPlayers, sortOrder);

  return (
    <div>
      <h2>Player Search</h2>
      <input 
        type="text" 
        placeholder="Search by name" 
        value={filter}
        onChange={e => setFilter(e.target.value)} 
      />

      <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
        <option value="asc">Name (A-Z)</option>
        <option value="desc">Name (Z-A)</option>
      </select>

      {loading ? (
        <p>Loading players...</p>
      ) : (
        <ul>
          {sortedPlayers.map(player => (
            <li key={player.id}>
              {player.name} - {player.position}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Sample Player Data (Replace with API call)
const initialPlayers = [
  { id: 1, name: "Mohamed Salah", position: "Forward" },
  { id: 2, name: "Virgil van Dijk", position: "Defender" },
  { id: 3, name: "Alisson Becker", position: "Goalkeeper" },
  // ... add more players here
];

export default PlayerSearch;
