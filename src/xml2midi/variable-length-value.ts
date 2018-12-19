export default (num: number): Uint8Array => {
  const bytes: number[] = [];

  do {
    let byte = num & 0x7F;
    num = num >> 7;
    if (bytes.length > 0) {
      byte = byte + 0x80;
    }
    bytes.unshift(byte);
  } while (num > 0);

  return new Uint8Array(bytes);
};
