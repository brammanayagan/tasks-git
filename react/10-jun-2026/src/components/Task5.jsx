import React, { useState, useRef, useEffect } from 'react';

function PreviousSearch() {
  const [search, setSearch] = useState('');
  const previousSearchRef = useRef('');

  useEffect(() => {
    previousSearchRef.current = search;
  }, [search]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>Task 5: Previous Search Tracker</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '100%', maxWidth: '300px' }}
      />
      <p><strong>Current Search:</strong> {search}</p>
      <p><strong>Previous Search:</strong> {previousSearchRef.current}</p>
    </div>
  );
}

export default PreviousSearch;
