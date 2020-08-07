// //------------------------------------CB-------------------------------------------------------------------
//
// let health = 50;
// let money = 500;
// function beAwake(openEyes, cb) {
//     setTimeout(() => {
//         if (openEyes) {
//             console.log('morning');
//             health += 10;
//             console.log(health)
//             cb(null, 'Good morning')
//         } else {
//             health = 0;
//             cb('RIP', null)
//         }
//
//     }, 2000)
// }
//
// function goToShower(haveWater, cb) {
//     setTimeout(() => {
//         if(haveWater) {
//             console.log('cool water');
//             health += 10;
//             cb(null, 'Now i`m clean')
//         } else {
//             health -= 10;
//             cb('Go back to bed', null)
//         }
//     },5000)
// }
//
// function breakfast(haveFood, cb) {
//     setTimeout(() => {
//         if (haveFood) {
//             console.log('cool burger');
//             health += 10;
//             cb(null, 'Now i`m full')
//         } else {
//             health = 0;
//             cb('RIP', null)
//         }
//     }, 3000)
// }
//
// function goToWork(cash, cb) {
//     setTimeout(() => {
//         if(money > 200){
//             console.log('i`m like taxi');
//             money -= 200;
//             cb(null, 'I`m call a taxi')
//         } else {
//             cb('I`m bomj', null)
//         }
//     }, 2000)
// }
//
// function job(health, cb) {
//     setTimeout(() => {
//         if(health >= 80) {
//             console.log('nice job');
//             money += 2000;
//             cb(null, 'Good job')
//         } else {
//             money = 0;
//             cb('You are fired', null)
//         }
//     }, 5000)
// }
//
// function goToHome(isJobGood, cb) {
//     setTimeout(() => {
//         if (isJobGood) {
//             console.log('go to home');
//             money -= 200;
//             health -= 30;
//             cb(null, 'call a taxi')
//         } else {
//             cb('Work In Tonight', null)
//         }
//     }, 2000)
// }
//
// function goToSleep(cash, cb) {
//     setTimeout(() => {
//         if(money > 2000) {
//             console.log('i`m not bomj');
//             cb(null, money)
//         } else {
//             cb('RIP', null)
//         }
//     }, 500)
// }
//
// beAwake(true, (theEnd, immunity) => {
//     theEnd ? document.write('Game Over') :
//         goToShower(true, (theEnd, immunity) => {
//             theEnd ? document.write('Game Over') :
//                 breakfast(true, (theEnd, immunity) => {
//                     theEnd ? document.write('Game Over') :
//                         goToWork(money, (theEnd, balance) => {
//                             theEnd ? document.write('Game Over') :
//                                 job(health, (theEnd, immunity) => {
//                                     theEnd ? document.write('Game Over') :
//                                         goToHome(true, (theEnd, balance) => {
//                                             theEnd ? document.write('Game Over') :
//                                                 goToSleep(money, (theEnd, money) => {
//                                                     theEnd ? document.write('Game Over') :
//                                                         document.write(`I'm billionaire. I have ${money}$`)
//                                                 })
//                                         })
//                                 })
//                         })
//                 })
//         })
//     })
//

// //-----------------------------------PROMISE------------------------------------------------------------------------------------------------------------
//
// let health = 50;
// let money = 500;
// function beAwake(openEyes) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (openEyes) {
//                 health += 10;
//                 resolve('Good morning')
//             } else {
//                 health = 0;
//                 reject('RIP')
//             }
//
//         }, 2000)
//     })
// }
//
// function goToShower(haveWater) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveWater) {
//                 health += 10;
//                 resolve('Now i`m clean')
//             } else {
//                 health -= 10;
//                 reject('Go back to bed')
//             }
//         }, 5000)
//     })
// }
//
// function breakfast(haveFood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveFood) {
//                 health += 10;
//                 resolve('Now i`m full')
//             } else {
//                 health = 0;
//                 reject('RIP')
//             }
//         }, 3000)
//     })
// }
//
// function goToWork(cash) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 200) {
//                 money -= 200;
//                 resolve('I`m call a taxi')
//             } else {
//                 reject('I`m bomj')
//             }
//         }, 2000)
//     })
// }
//
// function job(health) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (health >= 80) {
//                 money += 2000;
//                 resolve('Good job')
//             } else {
//                 money = 0;
//                 reject('You are fired')
//             }
//         }, 5000)
//     })
// }
//
// function goToHome(isJobGood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobGood) {
//                 money -= 200;
//                 health -= 30;
//                 resolve('call a taxi')
//             } else {
//                 reject('Work In Tonight')
//             }
//         }, 2000)
//     })
// }
//
// function goToSleep(cash) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 2000) {
//                 resolve(money)
//             } else {
//                 reject('RIP')
//             }
//         }, 500)
//     })
// }
//
// beAwake(true)
//     .then(reward => {
//         console.log(reward)
//         return goToShower(true)
//     })
//     .then(reward => {
//         console.log(reward)
//         return breakfast(true)
//     })
//     .then(reward => {
//         console.log(reward)
//         return goToWork(money)
//     })
//     .then(reward => {
//         console.log(reward)
//         return job(health)
//     })
//     .then(reward => {
//         console.log(reward)
//         return goToHome(true)
//     })
//     .then(reward => {
//         console.log(reward)
//         return goToSleep(money)
//     })
//     .then(money => {
//         console.log(`I'm billionaire. I have ${money}$`)
//     })
//     .catch(reason => {
//         console.log(reason)
//     })
//     .finally(() => {
//         document.write('GOOD DAY')
//     })

//------------------------------------ASYNC-AWAIT--------
// let health = 50;
// let money = 500;
// function beAwake(openEyes) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (openEyes) {
//                 health += 10;
//                 resolve('Good morning')
//             } else {
//                 health = 0;
//                 reject('RIP')
//             }
//
//         }, 2000)
//     })
// }
//
// function goToShower(haveWater) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveWater) {
//                 health += 10;
//                 resolve('Now i`m clean')
//             } else {
//                 health -= 10;
//                 reject('Go back to bed')
//             }
//         }, 5000)
//     })
// }
//
// function breakfast(haveFood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveFood) {
//                 health += 10;
//                 resolve('Now i`m full')
//             } else {
//                 health = 0;
//                 reject('RIP')
//             }
//         }, 3000)
//     })
// }
//
// function goToWork(cash) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 200) {
//                 money -= 200;
//                 resolve('I`m call a taxi')
//             } else {
//                 reject('I`m bomj')
//             }
//         }, 2000)
//     })
// }
//
// function job(health) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (health >= 80) {
//                 money += 2000;
//                 resolve('Good job')
//             } else {
//                 money = 0;
//                 reject('You are fired')
//             }
//         }, 5000)
//     })
// }
//
// function goToHome(isJobGood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobGood) {
//                 money -= 200;
//                 health -= 30;
//                 resolve('call a taxi')
//             } else {
//                 reject('Work In Tonight')
//             }
//         }, 2000)
//     })
// }
//
// function goToSleep(cash) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 2000) {
//                 resolve(money)
//             } else {
//                 reject('RIP')
//             }
//         }, 500)
//     })
// }
// myDay()
//
// async function myDay() {
//     try {
//         await beAwake(true);
//         await goToShower(true);
//         await breakfast(true);
//         await goToWork(money);
//         await job(health);
//         await goToHome(true);
//         await goToSleep(money);
//         console.log(`I'm billionaire. I have ${money}$`);
//         document.write('GOOD DAY')
//     } catch (e) {
//         console.error(e)
//     }
// }
//
