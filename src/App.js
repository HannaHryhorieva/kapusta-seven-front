import './styles/App.css';

import { Suspense, lazy, useEffect } from 'react';
import { getIsLogging, getToken } from './redux/login/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar } from './components/AppBar/AppBar';
import { LinearProgress } from '@mui/material';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/RoutePrivatPublic/PrivateRoute';
import PublicRoute from './components/RoutePrivatPublic/PublicRoute';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import authOperations from './redux/login/auth-operations';
import theme from './styles/theme';

import Loader from './components/Loader/Loader';

const HomeView = lazy(() => import('./views/HomeView'));
const AuthView = lazy(() => import('./views/AuthView/AuthView'));
const ReportView = lazy(() => import('./views/ReportView'));
const FormExpenseForMob = lazy(() =>
  import('./components/TransactionForm/FormExpenseForMob'),
);
const FormIncomeForMob = lazy(() =>
  import('./components/TransactionForm/FormIncomeForMob'),
);

function App() {
  const token = useSelector(getToken);
  const isLogging = useSelector(getIsLogging);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(token));
  }, [dispatch, token]);

  return (
    <ThemeProvider theme={theme}>
      {isLogging ? (
        <LinearProgress />
      ) : (
        <div>
          <AppBar position="fixed" />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute path="/auth" redirectTo="/" restricted>
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
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
