import React from 'react';

const RecentlyUsedContext = React.createContext({
  recentlyUsed: [],
  addFeature: () => {},
});

export default RecentlyUsedContext;