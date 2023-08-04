export const stringToCharCodeArray = (str: string): Uint8Array => {
  return new Uint8Array(
    str.split("").map(
      (chr) => chr.charCodeAt(0)
    )
  );
};
