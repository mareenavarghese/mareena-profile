import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
