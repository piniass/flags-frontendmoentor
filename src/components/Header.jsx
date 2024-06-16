import React, { useState, useEffect } from 'react';
import DarkIcon from '../svg/DarkIcon';
import SunIcon from '../svg/SunIcon';
export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme; // Optional: To apply the theme to the body
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className='w-full bg-white dark:bg-slate-800 dark:text-white shadow-md p-3 border-b dark:border-b-slate-600'>
      <div className='max-w-[1440px] m-auto flex justify-between items-center p-4'>
        <h1 className='font-bold'>Where in the world?</h1>
        <button onClick={handleChangeTheme} className='border p-2 rounded-md flex items-center gap-2 hover:bg-slate-100 hover:dark:text-black'>
        {theme === 'light' ? <DarkIcon/> : <SunIcon />}
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </header>
  );
}
