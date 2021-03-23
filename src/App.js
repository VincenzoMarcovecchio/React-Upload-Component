import './App.css';
import React, { useState, useEffect } from 'react';
import { FileUploader } from './UploadComponent';

const App = () => {
  return (
    <div className="mt-2  d-flex justify-content-between align-items-start">
      <FileUploader FILE_SIZE="1024" accept="" url="" />
    </div>
  );
};
export default App;
