export default log = (message) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(message);
    }
  };