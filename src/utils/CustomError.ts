class CustomError extends Error {
  statusCode?: number = 400;
  constructor(message: string, statusCode?: number) {
    super(message);
    if (statusCode) this.statusCode = statusCode;
  }
}

export default CustomError;
