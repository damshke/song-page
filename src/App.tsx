import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import { songs } from './data/songs';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SongList songs={songs} />} />
          <Route path="/song/:id" element={<SongDetail songs={songs} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;