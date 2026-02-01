export const authConfig = {
  jwt: {
    secret: String(process.env.JWT_SECRET),
    expiresIn: "1d",
  },
};
