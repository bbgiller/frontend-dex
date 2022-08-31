const AxiosErrorHandler = (error: any) => {
  if (error.response) {
    console.log(error.response);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};
export default AxiosErrorHandler;
