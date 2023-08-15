
const customErrorHandler = (err, req, res, next) => {
  console.log(err,"Hasoooo") 
  if (err.status === 400) {
    err.name = 'Bad Request';
  }
  console.log(err,"Hasoooo") 
  return res.status(err.status).json({
    success:false,
    message: `${err.name} : ${err.message}`,
  });
};

export default customErrorHandler;
