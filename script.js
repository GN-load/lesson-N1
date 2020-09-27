// const newObj = Object.create({}, {
//     name: {
//         value: "Igor",
//         writable: true,
//         enumerable: true
//     },
//     birthday: {
//         value: 1995,
//     },
//     age:{
//     get() {
//         return new Date().getFullYear() - this.birthday
//     },
//     set(value) {
//         document.body.style.background = "green"
//         console.log("this is set value", value);
//     }
// },
// })



// const obj = {
//     name: "John",
//     age: 25,
//     birthDate: 1995,
// };
// obj.mail = "hhhhhh";
// console.log(obj);
// delete obj.age;
// console.log(obj);
// console.log(newObj)
// const obj = {
//         name: "John",
//         age: 25,
//         birthDate: 1995,
//     };
// const func = (a) => {
//     const b = Object.keys(a);
//     console.log(b.length)
// };
// func(obj)



// const products = [{
//     name: 'радар',
//     price: 1300,
//     quantity: 4
// }, {
//     name: 'сканер',
//     price: 1600,
//     quantity: 6
// }, {
//     name: 'дроид',
//     price: 2000,
//     quantity: 3
// }];
// const func = (a, b) => {
//     for(let i = 0;i < a.length;i++) {
//         if(a[i].name == b) {
//             console.log(a[i].price * a[i].quantity);
//         };
//     };
// };
// func(products, 'сканер');


// const arr = [{
//     name: 'a',
//     value: 12
// },
// {
//     name: 'b',
//     value: 2
// },
// {
//     name: 'c',
//     value: 14
// },
// {
//     name: 'd',
//     value: 15
// }];
// const lll = [34, 67, 77]
// const newArr = arr.map(x => x.name);
// const rs = lll.reduce((res, el) => res += el, 0);
// console.log(arr);
// console.log(newArr);
// console.log(rs)

// ctrl + y вернуть вперед

