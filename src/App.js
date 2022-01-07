import React,{Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./components/index";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    );

  }

}

export default App;