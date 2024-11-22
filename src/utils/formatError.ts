const formatError = (error?: string) => {
  try {
    if (!error)
      throw new Error();

    return JSON.parse(error);
  } catch {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor!",
    }
  }
};

export { formatError };