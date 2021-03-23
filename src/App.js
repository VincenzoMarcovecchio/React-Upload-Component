import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { FileUploader } from './UploadComponent';

const App = () => {
  return (
    <div className="mt-2  d-flex justify-content-between align-items-start">
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            render={() => <FileUploader FILE_SIZE="1024" accept="" url="" />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};
export default App;
