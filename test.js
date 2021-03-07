const streamToString = async (stream) => {
  try {
    console.log("yo");
    let data = await stream.read();
    return byteArrToString(data.value);
  } catch (e) {
    console.error(e);
    return "";
  }
};

const byteArrToString = (array) => {
  var result = "";
  for (var i = 0; i < array.length; ++i) {
    result += String.fromCharCode(array[i]);
  }
  return result;
};

const BookLoader = () => {
  const LoadBooks = async () => {
    let books = await fetch("books.json");
    return JSON.parse(await streamToString(books.body.getReader()));
  };

  return { LoadBooks };
};
