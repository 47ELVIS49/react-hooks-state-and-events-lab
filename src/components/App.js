import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import ShoppingList from './ShoppingList';
import data from '../components/data';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header name={data.name} />
      <About image={data.image} about={data.about} />
      <ArticleList posts={data.posts} />
      <ShoppingList items={data.items} />

      <button onClick={handleDarkModeToggle}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App;
