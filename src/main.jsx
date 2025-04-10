import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ChallengePerson from './ChallengePerson.jsx';
import DrawPerson from "./DrawPerson";
import DrawCelebrity from "./DrawCelebrity";
import FinalRiddle from "./FinalRiddle.jsx";
import Codebreakers from "./codebreakers";
import CodebreakersSolo from "./codebreakers-solo";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter basename="/Amazing-Race">
   <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ChallengePerson" element={<ChallengePerson />} />
        <Route path="/DrawPerson" element={<DrawPerson />} />
        <Route path="/DrawCelebrity" element={<DrawCelebrity />} />
        <Route path="/FinalRiddle" element={<FinalRiddle />} />
        <Route path="/codebreakers" element={<Codebreakers />} />
        <Route path="/codebreakersSolo" element={<CodebreakersSolo />} />
        <Route path="/App" element={<App />} />
      </Routes>
</BrowserRouter>
</StrictMode>
);
