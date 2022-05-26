export const getRandomLetter = (length: number): string => {
  return getRandom(length, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
};

export const getRandomNumber = (length: number): string => {
  return getRandom(length, "0123456789");
};

const getRandom = (length: number, characters: string): string => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
