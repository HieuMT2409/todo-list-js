// file này sẽ có công dụng là ghi log 
export default function logger(reducer){
    return (preState, action, args) =>{
        console.group(action)
        console.log('PreState: ', preState)
        console.log('Action Arugements: ', args)
        const nextState = reducer(preState, action, args)
        console.log('nextState: ', nextState)


        console.groupEnd()

        return nextState
    }
}