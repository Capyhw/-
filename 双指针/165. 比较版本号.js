let versionToArray = function (str) {
  let arr = str.split(".");
  return arr.map((item) => Number(item));
};

var compareVersion = function (version1, version2) {
  let arr1 = versionToArray(version1);
  let arr2 = versionToArray(version2);
  let i = 0;

  while (i < arr1.length && i < arr2.length) {
    if (arr1[i] > arr2[i]) {
      return 1;
    } else if (arr1[i] == arr2[i]) {
      i++;
    } else {
      return -1;
    }
  }
  if (arr2.length > arr1.length) {
    while (i < arr2.length) {
      if (arr2[i] > 0) return -1;
      else i++;
    }
    return 0;
  } else if (arr1.length > arr2.length) {
    while (i < arr1.length) {
      if (arr1[i] > 0) return 1;
      else i++;
    }
    return 0;
  } else {
    return 0;
  }
};
