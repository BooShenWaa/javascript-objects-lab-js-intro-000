var recipes = {


}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign( {}, obj, { [key]:value } )
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(obj, key){
  const obj2 = delete obj[key];
  return obj2
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key;
  return obj
}
