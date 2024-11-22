const handleError = (e: { status: number, error: any }) => {
  return new Error(JSON.stringify(e));
};

export { handleError } ;