import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h2>Welcome to the count app</h2>
      <Link to="/counter">Start Count App</Link>
      <Link to="/ErrorPage">Test 404 and Error</Link>
    </div>
  );
}

export default Welcome;