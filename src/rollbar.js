import Rollbar from 'rollbar';

// Track error by rollbar.com
Rollbar.init({
  accessToken: 'cd5f78ceaade46f6b5e6fced70de964b',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'production',
  },
});
