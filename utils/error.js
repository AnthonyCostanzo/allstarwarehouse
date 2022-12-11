export const getError = (err) =>
  err.response && err.response.data && err.response.message
    ? err.response.message
    : err.message;
