
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Header } from './contact.styled';
const Lazycontact = lazy(() => import('./contact'));

function Contact(props) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Simulate a delay before showing the component (e.g., after data fetching)
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000); // Show component after 3 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <div>
      <Header>loading...</Header>
      

      {showComponent ? (
        <Suspense fallback={<div>Loading component...</div>}>
          <Lazycontact />
        </Suspense>
      ) : null}
    </div>
  );
      };

export default Contact;

