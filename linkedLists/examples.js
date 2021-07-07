//Pointer example

let obj1 = { a: true };
let obj2 = obj1;

// both of these point to the same location in memory obj2 and obj1 point to the same piece of data in memory
obj1.a = "love"
obj1 = null
// console.log(obj1)
// console.log(obj2)

// Because there is a pointer to it, {a: true} does not actually get deleted and is still accessible by obj2

obj2 = "love"
//now the {a: true} will be completely deleted this is called garbage collection

//garbage collected = memory is managed automatically

//in low level languages we'd have to delete unused memory manually