import React, { useState, useCallback } from 'react';
import RecentlyUsedContext from './RecentlyUsedContext';

const RecentlyUsedProvider = ({ children }) => {
  const [recentlyUsed, setRecentlyUsed] = useState([]);

  const addFeature = useCallback((feature) => {
    setRecentlyUsed((prevFeatures) => {
      const filteredFeatures = prevFeatures.filter(f => f !== feature);
      const newFeatures = [feature, ...filteredFeatures].slice(0, 3);
      return newFeatures;
    });
  }, []);

  return (
    <RecentlyUsedContext.Provider value={{ recentlyUsed, addFeature }}>
      {children}
    </RecentlyUsedContext.Provider>
  );
};

export default RecentlyUsedProvider;