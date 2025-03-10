// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/components/Header.js
function Header() {
  return <h1>Simple React Application</h1>;
}
export default Header;

// src/components/Content.js
function Content(props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}
export default Content;

// src/components/Footer.js
function Footer() {
  return <h1>Created by Me, of course.</h1>;
}
export default Footer;

// src/App.js
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}
export default App;
