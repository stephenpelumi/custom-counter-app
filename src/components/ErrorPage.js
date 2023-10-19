import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';


function ErrorPage() {
  const throwError = () => {
    // Simulate an error by throwing an exception
    throw new Error('This is a test error!');
  };

  return (
    <div>
      <h2>Error Boundary Test Page</h2>
      <button onClick={throwError}>Trigger Test Error</button>
      <Link to="/nonexistent">Trigger 404 Page</Link>
      <Link to="/">Back to Home Page</Link>
      <ErrorBoundary>
        <p>This is a component wrapped in an error boundary.</p>
      </ErrorBoundary>
    </div>
  );
}

export default ErrorPage;



