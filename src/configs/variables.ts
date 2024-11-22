import dotenv from 'dotenv';

dotenv.config();

const variables = {
  geminiToken: process.env?.GEMINI_TOKEN,
  db: process.env?.DB,
  dbUser: process.env?.DB_USER,
  dbPassword: process.env?.DB_PASSWORD,
  port: process.env?.PORT,
  dbType: process.env?.DB_TYPE,
}

export const geminiToken = String(variables.geminiToken);
export const db = String(variables.db);
export const dbUser = String(variables.dbUser);
export const dbPassword = String(variables.dbPassword);
export const port = String(variables.port);
export const dbType = String(variables.dbType)

export const verifyRequiredVariables = (): boolean => {
  let conditional = true;

  Object.entries(variables).forEach((value) => {
    if (!value && value !== null)
      conditional = false;
  })

  return conditional
}