var recipes = {
   
}
 
//   function updateObjectWithKeyAndValue(object, key, value){
//   return Object.assign({}, object,{key:value})

// }

function updateObjectWithKeyAndValue(object, key, value){
  // return Object.assign({},{[key]:value})
  return Object.assign({key:value}, object)
//console.log(1)
}

 
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object.key
  return object
}