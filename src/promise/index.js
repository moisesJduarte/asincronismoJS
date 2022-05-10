const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!');
        } else {
            reject('whoops!');
        }
    });
};

somethingWillHappen() 
    .then(response => console.log(response))
    .catch(err => console.error(err));
//algo va a pasar 

somethingWillHappen2 = () => {
    return new Promise((resolt, reject) => {
        if (true) {
            setTimeout(() => {
                resolt('True');
            }, 2000)
        } else {
            const error = new Error('whops!');
            reject(error);
        } 
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

//como realizar cadenas de promesas promise.all

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})