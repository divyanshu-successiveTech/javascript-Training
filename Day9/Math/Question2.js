import lodash from "lodash";

let arr= [1,2,3,[4,5]];

let flattenArray = lodash.flattenDeep(arr);
console.log(flattenArray);
