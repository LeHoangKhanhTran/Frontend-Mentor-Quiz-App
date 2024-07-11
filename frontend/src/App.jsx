import GlobalStyle from './GlobalStyle.js';
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Quiz from './pages/Quiz.jsx';
import Result from './pages/Result.jsx';
import Error from './pages/Error.jsx';
import { lightTheme, darkTheme } from './Themes.js';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('quiz-theme') === 'light' ? lightTheme : darkTheme)

  const toggleTheme = () => {
    setTheme(prev => prev === lightTheme ? prev = darkTheme : prev = lightTheme);
    let themeName = theme.name === 'light' ? 'dark' : 'light'
    localStorage.setItem('quiz-theme', themeName)
  }

  const themeObj = {
    theme,
    changeTheme: {toggleTheme}
  }

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/quiz/:topicName' element={<Quiz/>}></Route>
          <Route path='/result' element={<Result/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
