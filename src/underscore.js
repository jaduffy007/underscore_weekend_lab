var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
      if(n === undefined){
        return array[0];
      }
      else if(n >array.length)
        return array;
      else{
        return array.splice(0,n);
      }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var anArray = [];
    botts = array.length -1;
    if (n === undefined){
      return array[botts];
    }else if (n === 0){
      return[];

    }else if (n > array.length) {
      return array;
    }
    else {
      return array.splice(array.length.length-n,n);
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    noDupes = [];
    for ( var i = 0; i <= array.length -1; i++){
      if(noDupes.indexOf(array[i])=== -1){
        noDupes.push(array[i]);
      }
    }
    return  noDupes;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var newArray = [];
    for (var i = 0; i < array.length; i++){
    newArray.push(array[i][key]);
    }
    return newArray;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if (array.indexOf(array[i]) !== -1){
      return true;
    }
    else{
      return false;
    }
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    var merged = [];
    for (var i = 0; i < array.length; i++)
    if(Array.isArray(array[i])){  //goes through each array index and determines if that type is an array
    merged = merged.concat(myFunctions.flatten(array[i])); // takes the elements that have been
    }
      else {
        merged.push(array[i]);
      }
    return merged;
  }
}

  }
    };
};
module.exports = myFunctions;
