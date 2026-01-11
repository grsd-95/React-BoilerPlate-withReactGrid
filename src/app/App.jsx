import React from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from '../common/contexts/AuthContext';
import { ThemeProvider } from '../common/contexts/ThemeContext';
import SuspenseBoundary from '../components/SuspenseBoundary';
import ErrorBoundary from '../components/ErrorBoundary';
import store from '../store';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <SuspenseBoundary>
              <AppRoutes />
            </SuspenseBoundary>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
