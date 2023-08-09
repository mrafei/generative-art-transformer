type ParseTokenMethod = (input: string) => Nullable<string>;
const parseToken: ParseTokenMethod = (input) => {
  const [key, token] = input.split(" ");
  if (key.toLowerCase() !== "bearer") return null;
  return token || null;
};
export default parseToken;
