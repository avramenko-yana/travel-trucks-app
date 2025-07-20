import React from 'react';
 
const SvgSprite = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <symbol id="icon-camper-van" viewBox="0 0 32 32">
        <path d="M28 10h-2v-2c0-1.1-0.9-2-2-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h1v2h-3v2h2v2h2v-2h12v2h2v-2h2v-2h-3v-2h1c1.1 0 2-0.9 2-2v-10c0-2.2-1.8-4-4-4zM10 18c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM22 18c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2z"></path>
      </symbol>
      <symbol id="icon-users" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      </symbol>
      <symbol id="icon-star" viewBox="0 0 20 20">
        <path d="M10 1.333l2.472 6.065h6.38l-5.16 3.748 1.973 6.066L10 13.464l-5.665 3.748 1.973-6.066-5.16-3.748h6.38L10 1.333z" />
      </symbol>
      <symbol id="icon-map-pin" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </symbol>
      <symbol id="icon-heart" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </symbol>
      <symbol id="icon-close" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </symbol>
      <symbol id="icon-ac" viewBox="0 0 20 20">
        <path d="M18 8h-1.55a5.52 5.52 0 00-10.9 0H4a1 1 0 00-1 1v6a1 1 0 001 1h14a1 1 0 001-1V9a1 1 0 00-1-1zm-8 4H8v-2h2v2zm4 0h-2v-2h2v2z"></path>
      </symbol>
      <symbol id="icon-transmission" viewBox="0 0 20 20">
        <path d="M10 3a1 1 0 011 1v1h2a1 1 0 011 1v2h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2H5a1 1 0 01-1-1v-2a1 1 0 011-1h1V7a1 1 0 011-1h2V4a1 1 0 011-1zM9 9H7v2h2V9zm4 0h-2v2h2V9z"></path>
      </symbol>
      <symbol id="icon-engine" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 012.707 2.707a8.001 8.001 0 0114.586 10.586zM10 16a6 6 0 100-12 6 6 0 000 12zM9 9h2v5H9V9z"></path>
      </symbol>
      <symbol id="icon-kitchen" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v2h14V5a1 1 0 00-1-1H4zM3 9v6a1 1 0 001 1h12a1 1 0 001-1V9H3z" clipRule="evenodd"></path>
      </symbol>
      <symbol id="icon-beds" viewBox="0 0 20 20">
        <path d="M3 7v10h14V7H3zm13-2a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h12zM5 9h10v2H5V9z"></path>
      </symbol>
      <symbol id="icon-tv" viewBox="0 0 20 20">
        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v8a1 1 0 001-1h10a1 1 0 001-1V5a1 1 0 00-1-1H5z"></path>
      </symbol>
      <symbol id="icon-shower" viewBox="0 0 20 20">
        <path d="M10 1a1 1 0 011 1v1.586l2.293-2.293a1 1 0 111.414 1.414L12.414 5H14a1 1 0 010 2h-1.586l2.293 2.293a1 1 0 11-1.414 1.414L11 8.414V10a1 1 0 11-2 0V8.414L6.707 10.707a1 1 0 11-1.414-1.414L7.586 7H6a1 1 0 010-2h1.586L5.293 2.707a1 1 0 111.414-1.414L9 3.586V2a1 1 0 011-1zM3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
      </symbol>
      <symbol id="icon-gas" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 011 1v1.343l1.707-1.707a1 1 0 111.414 1.414L11.414 6H13a1 1 0 110 2h-1.586l1.707 1.707a1 1 0 11-1.414 1.414L10 9.414V11a1 1 0 11-2 0V9.414l-1.707 1.707a1 1 0 11-1.414-1.414L6.586 8H5a1 1 0 110-2h1.586l-1.707-1.707a1 1 0 011.414-1.414L8 4.343V3a1 1 0 011-1zM3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
      </symbol>
      <symbol id="icon-water" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.22 8.22a.75.75 0 011.06 0L10 10.94l2.72-2.72a.75.75 0 111.06 1.06L11.06 12l2.72 2.72a.75.75 0 11-1.06 1.06L10 13.06l-2.72 2.72a.75.75 0 01-1.06-1.06L8.94 12 6.22 9.28a.75.75 0 010-1.06z"></path>
      </symbol>
      <symbol id="icon-van" viewBox="0 0 32 32">
        <path d="M28 10h-2v-2c0-1.1-0.9-2-2-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h1v2h-3v2h2v2h2v-2h12v2h2v-2h2v-2h-3v-2h1c1.1 0 2-0.9 2-2v-10c0-2.2-1.8-4-4-4zM10 18c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM22 18c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2z"></path>
      </symbol>
      <symbol id="icon-fully-integrated" viewBox="0 0 32 32">
        <path d="M28 6h-24c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2h24c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2zM10 22c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM22 22c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM28 14h-24v-4h24v4z"></path>
      </symbol>
      <symbol id="icon-alcove" viewBox="0 0 32 32">
        <path d="M28 12h-2v-4c0-1.1-0.9-2-2-2h-18v18h2v-16h16v4h2v-4c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2v18h20v-8h2v8c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2h18c1.1 0 2 0.9 2 2v4z"></path>
      </symbol>
    </defs>
  </svg>
);

export default SvgSprite;
