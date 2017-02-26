exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    let total = 0
    arr.map(x => total += x)
    return total
  },

  remove: function(arr, item) {
    const newArr = arr.filter(x => x !== item)
    return newArr
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1)
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    const arr = arr1.concat(arr2)
    return arr
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let counter = 0
    arr.map(x => {
      if (x === item) counter += 1
    })
    return counter
  },

  duplicates: function(arr) {
    const dupes = {}
    const newArr = []
    arr.map(x => {
      if (x in dupes) {
        dupes[x] += 1
      } else {
        dupes[x] = 1
      }
    })
    Object.keys(dupes).map(x => {
      if (dupes[x] > 1) {
        newArr.push(Number(x))
      }
    })
    return newArr
  },

  square: function(arr) {
    arr.map((x, i) => arr[i] = x * x)
    return arr
  },

  findAllOccurrences: function(arr, target) {
    const newArr = []
    arr.map((x, i) => {
      if (x === target) {
        newArr.push(i)
      }
    })
    return newArr
  }
};
