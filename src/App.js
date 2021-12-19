import './styles/App.css';

import { Switch } from 'react-router-dom';

import { AppBar } from './components/AppBar/AppBar';
import AuthView from './views/AuthView/AuthView';
import HomeView from './views/HomeView';
import ReportView from './views/ReportView';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import PrivateRoute from './components/RoutePrivatPublic/PrivateRoute';
import PublicRoute from './components/RoutePrivatPublic/PublicRoute';

//import ExampleComponent from './example/ExampleComponent';
import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
import FormExpenseForMob from './components/TransactionForm/FormExpenseForMob';
import FormIncomeForMob from './components/TransactionForm/FormIncomeForMob';
/* 
Шляхи до сторінки з формами введення транзакції при розширенню екрану на мобільних

==============
при рендері арр до решти раутів
            <Route path="/incomeform">
              <FormIncomeForMob/>
            </Route> 
            <Route path="/expenseform">
              <FormExpenseForMob/>
            </Route> 
            ===================
            */

// const HomeView = lazy(() => import('./views/HomeView'));

function App() {
  // const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="fixed" />
        {/* <ExampleComponent /> */}
        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute path="/auth">
              <AuthView />
            </PublicRoute>
            <PrivateRoute path="/" exact redirectTo="/auth">
              <HomeView />
            </PrivateRoute>
            <PrivateRoute path="/report" redirectTo="/auth">
              <ReportView />
            </PrivateRoute>
            <PrivateRoute path="/incomeform" redirectTo="/auth">
              <FormIncomeForMob />
            </PrivateRoute>
            <PrivateRoute path="/expenseform" redirectTo="/auth">
              <FormExpenseForMob />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
