module.exports = class AsyncTest {
    myAsyncFunction = (callback) => {
        setTimeout(() => {
            callback("Welcome");
        }, 100)
    }
    
    myPromiseFunction = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Welcome");
            }, 100)
        })
    }
}