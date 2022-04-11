const objectMap = (obj, callback) => {
  // check if callback
  if (typeof callback !== "function")
    throw new Error("callback must be a function");
  // check for null
  if (obj === null) return null;
  // base case check for primitive value
  if (typeof obj !== "object") return callback(obj);

  // if its an object then loop the object
  // init new object
  const newObject = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    // recursive case
    newObject[key] = objectMap(obj[key], callback);
  }

  return newObject;
};
export default objectMap;
