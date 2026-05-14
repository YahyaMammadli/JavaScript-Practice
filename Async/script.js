// async function printNumbers() {
//     for (let i = 1; i <= 5; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         console.log(i);
//     }
//     console.log('DONE');
// }

// printNumbers();





// function sum(a, b) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(a + b), 100);
//     });
// }

// function minus(a, b) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(a - b), 100);
//     });
// }

// function multiply(a, b) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(a * b), 100);
//     });
// }

// async function calculate() {
//     const res1 = await sum(5, 5);        // 10
//     const res2 = await minus(res1, 3);   // 7
//     const res3 = await multiply(res2, 10); // 70 
    
//     console.log(res3); // 70
// }

// calculate();









// const p1 = new Promise(resolve => setTimeout(() => resolve('3 sec'), 3000));
// const p2 = new Promise(resolve => setTimeout(() => resolve('1 sec'), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve('2 sec'), 2000));

// Promise.race([p1, p2, p3]).then(result => console.log('Race results:', result));
// Will output: "1 sec"



// 1. What result will be returned? => The result of the fastest promise will be returned, i.e., "1 секунда" (p2).

// 2. Why? => Promise.race resolves (or rejects) with the value of the first settled promise.
//     p2 settles after 1 second, the others later.

// 3. What changes if the fastest promise fails? => If the fastest promise is rejected, Promise.race immediately rejects with that error, regardless of the other promises.
//     The results of the others will not be taken into account.



















// const numbers = [1, 2, 3, 4, 5, 6];

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             num % 2 === 0 ? resolve(num) : reject(num);
//         }, 0);
//     });
// }

// async function processNumbers() {
//     const results = await Promise.allSettled(numbers.map(num => checkNumber(num)));

//     const fulfilled = results
//         .filter(r => r.status === 'fulfilled')
//         .map(r => r.value);
//     const rejected = results
//         .filter(r => r.status === 'rejected')
//         .map(r => r.reason);

//     console.log('Fulfilled (Even):', fulfilled);   // [2, 4, 6]
//     console.log('Rejected (Odd):', rejected);     // [1, 3, 5]
// }

// processNumbers();
















// function uploadFile(fileName, time) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`${fileName} uploaded`);
//             resolve();
//         }, time);
//     });
// }

// async function uploadAll() {
//     const uploads = [
//         uploadFile('file1', 2000),
//         uploadFile('file2', 1000),
//         uploadFile('file3', 1500)
//     ];

//     await Promise.all(uploads);
//     console.log('ALL FILES UPLOADED');
// }

// uploadAll();












// function fakeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.5 ? resolve('Ok') : reject(new Error('Issue'));
//         }, 100);
//     });
// }

// async function requestWithRetry(maxRetries = 3) {
//     for (let attempt = 1; attempt <= maxRetries; attempt++) {
//         try {
//             await fakeRequest();
//             console.log('SUCCESS');
//             return;
//         } catch (err) {
//             console.log(`Attempt ${attempt} failed`);
//             if (attempt === maxRetries) {
//                 console.log('ERROR');
//             }
//         }
//     }
// }

// requestWithRetry();






















// const promise1 = () => new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Task 1 done');
//         resolve();
//     }, 500);
// });
// const promise2 = () => new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Task 2 done');
//         resolve();
//     }, 500);
// });
// const promise3 = () => new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Task 3 done');
//         resolve();
//     }, 500);
// });

// const tasks = [promise1, promise2, promise3];

// async function runSequentially(taskList) {
//     for (const task of taskList) {
//         await task(); 
//     }
// }

// runSequentially(tasks);




async function runTimers(timers) {
    
    const promises = timers.map(({ name, time }) => {
    
        return new Promise(resolve => {

            setTimeout(() => {
            
                console.log(name);
            
                resolve();
            
            }, time);
        
        });
    
    });

    await Promise.all(promises);
    
    console.log('ALL TIMERS DONE');

}


runTimers([
    { name: 'Timer1', time: 1000 },
    { name: 'Timer2', time: 3000 },
    { name: 'Timer3', time: 2000 }
]);

