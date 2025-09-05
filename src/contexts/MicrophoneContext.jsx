import React, { createContext, useContext, useState } from 'react';

const MicrophoneContext = createContext();

export const useMicrophone = () => {
  const context = useContext(MicrophoneContext);
  if (!context) {
    throw new Error('useMicrophone must be used within a MicrophoneProvider');
  }
  return context;
};

export const MicrophoneProvider = ({ children }) => {
  const [stream, setStream] = useState(null);

  const value = {
    stream,
    setStream
  };

  return (
    <MicrophoneContext.Provider value={value}>
      {children}
    </MicrophoneContext.Provider>
  );
};