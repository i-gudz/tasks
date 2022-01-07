// Task 38 Boolean
// let x1 = Number(prompt('Choose x1'))
// let y1 = Number(prompt('Choose y1'))
// let x2 = Number(prompt('Choose x2'))
// let y2 = Number(prompt('Choose y2'))
// console.log((Math.abs(x1-x2)==Math.abs(y1-y2)))

// Task 39 Boolean
// let x1 = Number(prompt('Choose x1'))
// let y1 = Number(prompt('Choose y1'))
// let x2 = Number(prompt('Choose x2'))
// let y2 = Number(prompt('Choose y2'))
// console.log((Math.abs(x1-x2)==Math.abs(y1-y2))||(x1==x2)||(y1==y2))

// Task 40 Boolean
// let x1 = Number(prompt('Choose x1'))
// let y1 = Number(prompt('Choose y1'))
// let x2 = Number(prompt('Choose x2'))
// let y2 = Number(prompt('Choose y2'))
// console.log(((Math.abs(x1 - x2) == 2) && (Math.abs(y1 - y2) == 1)) || ((Math.abs(y1 - y2) == 2) && (Math.abs(x1 - x2) == 1)))

// Task 18 If
// let a = Number(prompt('Choose a'))
// let b = Number(prompt('Choose b'))
// let c = Number(prompt('Choose c'))
// a==b ? console.log('3') : b==c ? console.log('1') : a==c ? console.log('2') : console.log('All numbers different')

// Task 19 If
// let a = Number(prompt('Choose a'))
// let b = Number(prompt('Choose b'))
// let c = Number(prompt('Choose c'))
// let d = Number(prompt('Choose d'))
// b == c && c == d ?
// console.log('1') :
// a == c && c == d ?
// console.log('2') :
// a == b && b == d ?
// console.log('3') :
// a == b && b == c ?
// console.log('4') :
// console.log('All numbers different')

// Task 20 If
// let a = Number(prompt('Choose a'))
// let b = Number(prompt('Choose b'))
// let c = Number(prompt('Choose c'))
// Math.abs(a-b)<Math.abs(a-c)? console.log('AB = ', Math.abs(a-b)) : console.log('AC = ', Math.abs(a-c))

// Task 21 If
// let x = Number(prompt('Choose x'))
// let y = Number(prompt('Choose y'))
// x == 0 && y == 0 ?
// console.log('0') :
// y == 0 ?
// console.log('1') :
// x == 0 ?
// console.log('2') :
// console.log('3')

// Task 22 If
// let x = Number(prompt('Choose x'))
// let y = Number(prompt('Choose y'))
// x>0 && y>0?
// console.log('1'):
// x<0 && y>0?
// console.log('2'):
// x<0 && y<0?
// console.log('3'):
// x>0 && y<0?
// console.log('4'):
// console.log('Point lies on the axis')

// Task 23 If
// let x1 = Number(prompt('Choose x1'))
// let y1 = Number(prompt('Choose y1'))
// let x2 = Number(prompt('Choose x2'))
// let y2 = Number(prompt('Choose y2'))
// let x3 = Number(prompt('Choose x3'))
// let y3 = Number(prompt('Choose y3'))
// let x4 = ''
// let y4 = ''
// x1==x2?
// x4=x3:
// x1==x3?
// x4=x2:
// x2==x3?
// x4=x1:
// x4 = 'Sides are not parallel'

// y1==y2?
// y4=y3:
// y1==y3?
// y4=y2:
// y2==y3?
// y4=y1:
// y4 = 'Sides are not parallel'

// typeof x4 == 'string' || typeof y4 == 'string' ? 
// console.log('Sides are not parallel') : 
// console.log('x4 =', x4, 'y4 =', y4)

// Task 24 If
// let x = Number(prompt('Choose x'))
// x>0 ? console.log(2*Math.sin(x)):
// x<=0 ? console.log(6-x):
// console.log('NaN')

// Task 25 If
// let x = Number(prompt('Choose x'))
// x < (-2) || x > 2 ? console.log(2 * x) : console.log(-3 * x)

// Task 26 If
// let x = Number(prompt('Choose x'))
// x<=0? console.log((-1)*x): 0<x && x<2? console.log(Math.pow(x,2)): x>=2? console.log(4): console.log('NaN')

// Task 27 If
// let x = Number(prompt('Choose x'))
// x < 0 ? console.log(0) : x % 2 == 0 ? console.log(1) : x % 2 != 0 ? console.log(-1) : console.log('NaN')

// Task 28 If
// let x = Number(prompt('Choose x'))
// if (x%100==0){
//     if(x%400==0){
//         console.log(366)
//     }else{
//         console.log(365)
//     }
// } else{
//     if(x%4==0){
//         console.log(366) 
//     } else{
//         console.log(365)
//     }
// }

// Task 12 For
// let n = Number(prompt('Choose n'))
// let m = 1
// for (let i = 1; i<n; i++){
//     let a = 1+i*0.1
//     m*=a
// }
// console.log('m =', m)

// Task 13 For
// let n = Number(prompt('Choose n'))
// let m = 1
// let k = -1
// for (let i = 1; i<n; i++){
//     k*=-1
//     let a = 1+i*0.1
//     m+=a*k
// }
// console.log('m =', m)

// Task 14 For
// let n = Number(prompt('Choose n'))
// let s = 0
// for (let i = 1; i < n; i++) {
//     s = s + (2 * i - 1)
//     console.log(s)
// }

// Task 15 For
// let a = Number(prompt('Choose a'))
// let n = Number(prompt('Choose n'))
// let s = 1
// for(let i = 0; i<n; i++){
//     s*=a
// }
// console.log(s)

