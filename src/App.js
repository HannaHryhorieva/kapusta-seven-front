import './App.css';

import ExampleComponent from './example/ExampleComponent';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

// const HomeView = lazy(() => import('./views/HomeView'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ExampleComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
