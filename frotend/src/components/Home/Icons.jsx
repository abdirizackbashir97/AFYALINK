import React from "react";

export function MaternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      {/* Refined Heart Shape */}
      <path 
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      {/* Baby/Pulse detail inside the heart */}
      <path 
        d="M8 10h2l1.5-2 2 4 1.5-2h2" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function BabyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      {/* Baby Face Outline */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      {/* Eyes */}
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      {/* Smile */}
      <path d="M9 14.5s1.3 2 3 2 3-2 3-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Little Pacifier / Hair tuft */}
      <circle cx="12" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function MentalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      {/* Head Profile */}
      <path 
        d="M20 12a8 8 0 0 0-16 0c0 2.8 1.5 5.3 4 6.6V22h4v-3.5h2V22h4v-4.5c2.5-1.5 4-4 4-6.5z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Brain waves / Positive thoughts */}
      <path 
        d="M9 11c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      {/* Document Outline */}
      <path 
        d="M7 3h8l4 4v14H7V3z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Folded corner */}
      <path 
        d="M15 3v4h4" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Health Cross inside the document */}
      <path 
        d="M12 10v6M9 13h6" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function FacilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      {/* Location Pin */}
      <path 
        d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Medical Cross inside the pin */}
      <path 
        d="M12 8v6M9 11h6" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="100%" height="100%">
      {/* Calendar Body */}
      <rect 
        x="3" y="5" width="18" height="16" rx="2" 
        stroke="currentColor" 
        strokeWidth="1.8" 
      />
      {/* Calendar Header Line */}
      <path 
        d="M3 10h18" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
      {/* Rings */}
      <path 
        d="M8 2v4M16 2v4" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
      {/* Checkmark for booked appointment */}
      <path 
        d="M9 15l2 2 4-4" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}