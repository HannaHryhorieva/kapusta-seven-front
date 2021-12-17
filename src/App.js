import './App.css';

import { AppBar } from './components/AppBar/AppBar';
import ExampleComponent from './example/ExampleComponent';
import HomeView from './views/HomeView';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

import ReportPage from './views/ReportView';
import { Auth } from './components/Auth/Auth';


// import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

// const HomeView = lazy(() => import('./views/HomeView'));

function App() {
  // const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="fixed" />
        <ExampleComponent />
        <Auth />
        <HomeView />
        <ReportPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
