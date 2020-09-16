// const arr = ['Jhon', 'Jane', 'James', 'Joe', 'June']

// // For
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// // For in
// for (let index in arr) {
//     console.log(arr[index])
// }

// // For each
// arr.forEach((item, index) => {console.log(item, index)})

// // Map
// arr.map((item, index) => {console.log(item, index)})

for(let i = 1; i<= 20 ; i+-1) {
    console.log(i)
}

let temp = ['apple', 'banana', 'kiwi']
// temp.forEach((element, idx) => {
//     console.log(idx, element)
// });

let newValue = temp.map((element, idx) => {
    return `${idx+1}.${element}`
})
console.log(newValue)