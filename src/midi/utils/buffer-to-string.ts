export const bufferToString = (buffer:ArrayBufferLike, startIndex:number, length:number):string => {
  let str = '';
  console.error({
    buffer,
    startIndex,
    length,
  });
  

  const dataView = new DataView(buffer, startIndex, length);

  for (let i = 0; i < length; i++) {
    str += String.fromCharCode(dataView.getUint8(i));
  }

  return str;
}
