import './styles/App.css';

import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AppBar } from './components/AppBar/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import PrivateRoute from './components/RoutePrivatPublic/PrivateRoute';
import PublicRoute from './components/RoutePrivatPublic/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const AuthView = lazy(() => import('./views/AuthView/AuthView'));
const ReportView = lazy(() => import('./views/ReportView'));
const FormExpenseForMob = lazy(() =>
  import('./components/TransactionForm/FormExpenseForMob'),
);
const FormIncomeForMob = lazy(() =>
  import('./components/TransactionForm/FormIncomeForMob'),
);

// import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="fixed" />
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
