import { createStore } from "./core.js";
import reducer from "./reducer.js";
import withLogger from "./logger.js"

const {attach,connect,dispatch} = createStore(withLogger(reducer))


// Đặt dispatch là biến global để có thể gọi ở đâu cũng được
window.dispatch = dispatch

export{
    attach,
    connect
}