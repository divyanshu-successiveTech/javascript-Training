// 1.create repo and add Readme.md file

// 2.Install the lodash package using npm install lodash. and use any of its function

import lodash from "lodash";

let arr= [1,2,3,[4,5]];

let flattenArray = lodash.flattenDeep(arr);
console.log(flattenArray);
