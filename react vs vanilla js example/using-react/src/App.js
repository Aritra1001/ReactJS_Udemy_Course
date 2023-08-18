// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
  ];

  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="App">
      <header>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAh1BMVEUiIiIiIB8SotETn80iHRoiHhwiICAiGxcSpdUTnswiGhUiHBkjEQAhIiEUlL4XhKgVjbQTmcUhKSsjGBEhKCofPUgaaIMjCAAgNDwVirEcWnAYeZkZcI0UlsEhLDEXf6IbY3weSFchMDcdUWMfQU4jDQAjFQsfOkQcXXMZbYkjAQAcSVkYdZSG/7OhAAAEd0lEQVR4nO3aWZOyOBQGYLLQHKIkRNRmNSg06Oj//30TcZne/KZqbuyueZ8rwCordSrLOUmCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfpeEsc+fGEue0ZLfRMrFJozeR27mv0j5tAb9Clnv0tSUTN0+RLI0aeq2wzNb9dNle0Fac4rLcOpwTHaWuNbE2+zZbfu5wpHH7W7XVzF3y9C/BxWP3Xa3Ky3fhs9u3Y+lTrSfMyaz0VCaq2hTULrKQsaGkqoI68L32LKw+TQ4pTzwZrvSdEqmxYDtdLp5eW7rfqxzcBaX4LyoNW80r+VlTfUBbfIviQlM2GjN/eV1zXn91+0tdPEKk9v3WK7NbQILcy3iZnXN1xLp7Ije9j22SYvldVQmmg4t14trF0uMxiB9wM9genfJ1wJD9TCs6RrGl02KJeGRJDJiFbJQqnnLTeKfHD/M1cxnILk1yD8eydbUvSarrj1wYZwxzglet12/fN3SCeXVAyrqqChszDkX9kr4l9imBZWRwuT2FcuivWm4r0fNIaWq71fjuOr7mvTBxMS5NW2YIQf5iKm85sRTHR9f3/q4yWToZ7QwlIMW27fX3upCED+NCuvCO4wdLG/W/XJPayULXkY+c1PKd65ZJ1Km9tQGq7bhtg4wUu+YNNSUSRaGoy2Gjkzmx2zftn3GgqHy5b2Le+mHaKepSBC3m6Siajlt6WaO+tRnIUFY+cVAuISFudU9L5TPP1gUnMgtEbeLWXfO0qZHuSXNKxmoPReeH7JJdOIpddH0M5OOyuiZbf1Bsor31+LTlwc83jC20FPYhK8aWGJ5eutiYc4NEriLuRb3GSurybwFbNRT1ITtw2Du6KRuNcIQx/NntfOHGRy/bXX4svTS21Lxvrfpxa237dDbbqKSzPISt1l3ndtamua2Ogv83KapvBxlhcxRq/70X/8jbOnI5VPtNBjanldSlrjzSmoW00q6peIcK6Z2jswCGe8VSwoS63yQcrTpNW8btnV9HFgy5W0m7iM55G1M6RIF1h1jbUPWHTftP1WCzLJ7leA/L46VJbtGtvueH38HQaSnmnQVW6V8UepL0uhak8ZNSsTrHLsgn7AsKq87IHXKTXfsx7E/dtWHHRAE7RtK3ffb/HIQWxuL6XHab9tjv+2R7IDd3f9AfjpLkO/OEgqcJTzw8eTqMMzXVARTlnY+udphjH6P7XSxuJ2TptM56fJ+TorLDI+wvPl0Kj/eoiadxWWGB85hu798uAMyXWZA2L7nZ7D7IFVrbhte327x4jLDY35JiC99apbU1/tty+k2oF9J0wXC9oA60HrOwtnQp+fblLNNQXqbRSGbt1Rjv+iRl0CINh87J8Rpurub1LFw3ZiXsdigsz0021qyvqRPj5dK6kX1BZGwFHc4ePmDaFMbU/WDvCciw+pkzGmHIfpHLJMyC98XUuH5C0bov0m+FJ+oRgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfp+/AXcPTgu/x/YFAAAAAElFTkSuQmCC"
          alt="react-logo"
        />
        <div>
          <h1>React JS</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button className={activeContentIndex === 0 ? "active" : ""} onClick={()=> setActiveContentIndex(0)}>
            Why React?
          </button>
          <button className={activeContentIndex === 1 ? "active" : ""} onClick={()=> setActiveContentIndex(1)}>
            Core Features
          </button>
          <button className={activeContentIndex === 2 ? "active" : ""} onClick={()=> setActiveContentIndex(2)}>
            Related Resources
          </button>
        </menu>
      </div>
      <div className="content-area">
        <ul>
          {content[activeContentIndex].map((item, index) => {
            return(
              <li key={index}>{item}</li>
            )  
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
