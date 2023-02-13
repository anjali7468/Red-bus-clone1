// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//           lorem hgvdghwdwd
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// ---------------------------------------------------------------------------
import React, { useState } from "react";
// import "./styles/App.css"
import './App.css';
import Swap from "./components/Swap";
import Source from "./components/Source";
import Destination from "./components/Destination";
import { Date } from "./components/Date";
import SearchBus from "./components/SearchBus";
import Nav from "./components/Nav";
import { Image } from "./components/Image";
import { BusDetails } from "./components/BusDetails";
import { BusCard } from "./components/BusCard";
import { Booked } from "./components/Booked";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import SocialFollow from "./components/SocialFollow";

const App = () => {
  const [message, setMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState({});

  return (
    <div id="main">
      <Nav />

      <div id="main-duplicate">
        <Source message={message} setMessage={setMessage} />
        <Swap
          source={message}
          destination={toMessage}
          setSource={setMessage}
          setToSource={setToMessage}
        />
        <Destination toMessage={toMessage} setToMessage={setToMessage} />
        <Date select={select} setSelect={setSelect} />
        <SearchBus
          from={message.toLowerCase()}
          to={toMessage.toLowerCase()}
          date={select}
          data={data}
          data2={data2}
          filter={filter}
          setData={setData}
          setData2={setData2}
          setFilter={setFilter}
        />
      </div>
      <Routes>
        <Route path="/" element={<Image />} />
        <Route
          path="BusDetails"
          element={
            <BusDetails
              filter={filter}
              setShow={setShow}
              data={data}
              data2={data2}
            />
          }
        />
        <Route path="BusDetails/BusCard" element={<BusCard show={show} />} />
        <Route path="BusDetails/BusCard/Booked" element={<Booked />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;