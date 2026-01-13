'use client';

import { useEffect, useState } from 'react';

export default function ViewCounter({ initialViews }) {
  const [views, setViews] = useState(initialViews);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // Simulate view count increment
    if (!hasIncremented) {
      // Small delay to simulate API call
      const timer = setTimeout(() => {
        setViews(prev => prev + 1);
        setHasIncremented(true);
        console.log('View count incremented!'); 
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasIncremented]);

  return (
    <span className="flex items-center gap-1 transition-all duration-500" style={{ color: hasIncremented ? '#dc2626' : 'currentColor' }}>
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
       </svg>
       <span>{views.toLocaleString('bn-BD')} বার পড়া হয়েছে</span>
       {hasIncremented && <span className="text-xs animate-pulse font-bold">+1</span>}
    </span>
  );
}
