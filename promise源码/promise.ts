const pending = 'PENDING';
const fulfilled = 'FULFILLED';
const rejected = 'REJECTED';

class promise{
    value;
    reason;
    status;
    // 成功回调
    onFullfilledCallbacks = []
    // 失败回调
    onRejectedCallbacks = []
    constructor(exetcor){
        // 初始化状态
        status = 'pending';
        // 将返回的成功，失败结果放在this上，方便与then，catch调用
        value = 'undefined'
        reason = 'undefined'
        // 新增
        // 成功函数
        const resolve = (value:<T>) =>{
            // 状态进行中才可改变状态
            if(status == 'PENDING'){
                status = fulfilled
                value = value
                onFullfilledCallbacks.forEach(fn => fn(value));
            }
        }
        // 失败函数
        const reject = (reason:<T>) =>{
            if(status == 'REJECTED'){
                status = 'REJECTED'
                reason = reason
                // 失败态函数执行
                onRejectedCallbacks.forEach(fn=>fn(reason))
            }
        }
        // 立即触发
        try {
            // 内部函数传入executer，用户方便调用
            exetcor(resolve,reject)
            reject(error)
        } catch (error) {
        }
    }
    // 增加链式调用
    then(onFullfilled:<T>,onRejected:<T>){
        // 穿透值
        onFullfilled = typeof onFullfilled == 'function' ? onFullfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason=>{throw new Error(reason instanceof error ? reason.message:reason)}
        return new promise((resolve:<T> || any,reject:<T> || any)=>{
            if(status == 'PENDING'){
                onFullfilledCallbacks.push(()=>{
                    try {
                        // 微任务模拟
                        setTimeout(()=>{
                            const result = onFullfilled(value)
                            // 分两种情况：
                            // 1. 回调函数返回值是Promise，执行then操作
                            // 2. 如果不是Promise，调用新Promise的resolve函数
                            result instanceof promise ? result.then(resolve,reject) : resolve(result)
                        })
                    } catch (error) {
                        reject(error)
                    }
                })
                onRejectedCallbacks.push(()=>{
                    try {
                        // 微任务模拟
                        setTimeout(()=>{
                            const reject = onRejected(reason)
                            reject instanceof promise ? reject.then(resolve,reject) : resolve(reject)
                        })
                    } catch (error) {
                        reject(error)
                    }
                })
            }else if(status == 'FULFILLED'){
                setTimeout(() => {
                    try {
                        const result = onFullfilled(value)
                        // 分两种情况：
                        // 1. 回调函数返回值是Promise，执行then操作
                        // 2. 如果不是Promise，调用新Promise的resolve函数
                        result instanceof promise ? result.then(resolve,reject) : resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                });
                
            }else if(status == 'REJECTED'){
                setTimeout(()=>{
                    try {
                        const reject = onRejected(reason)
                        reject instanceof promise ? reject.then(resolve,reject) : resolve(reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })
        // // 微任务模拟
        // setTimeout(() => {
        //     if(status == 'PENDING'){
            //         onRejectedCallbacks.push(onRejected)
            //         onFullfilledCallbacks.push(onFullfilled)
        //         onFullfilled(value)
        //     }else if(status == 'REJECTED'){
        //         onRejected(reason)
        //     }
        // });
    }
    catch(null,onRejected){
        return then(null,onRejected)
    }
    static resolve(value){
        if(value instanceof promise){
            return value
        }else{
            return new promise(resolve,reject)=>resolve(value)
        }
    }
    static reject(value){
        return new promise((resolve,reject)=>{
            reject(value)
        })
    }
    static all(promiseall){
        const len = promiseall.length
        const values = new Array(len)
        let count = 0
        return new promise((resolve,reject)=>{
            for(let k = 0; k < len; k++){
                promise.resolve(promiseall[k]).then(val=>{
                    values[k] = val;
                    count++;
                    if(count === len)resolve(values)
                },
                err=>reject(err))
            }
        })
    }
    static rece(promiseall){
        return new promise((resolve,reject)=>{
            promiseall.forEach(p=>{
                promise.resolve(p).then(
                    val => resolve(val)
                    err => reject(err)
                )
            })
        })
    }

}