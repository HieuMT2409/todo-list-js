export default function html([first,...strings],...values){
    return values.reduce((acc,cur) => acc.concat(cur,strings.shift()),
    [first]
        
    )
    .filter(x => x && x !== true || x===0)
    .join('')
}

export function createStore(reducer){
    // Bản chất reduce sẽ cần nhận lại chính giá trị trước đó mà nó return
    let state = reducer() 
    const roots = new Map()

    function render(){
        for (const [root,component] of roots ){
            const output = component()
            root.innerHTML = output
        }
    }

    return{
        attach(component,root){
            roots.set(root,component) 
            render()
        },
        // props là những công cụ, dữ liệu  truyền vào component sau này
        connect(selector = state => state){
            return component =>(props, ...args) => 
            component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ... args){
            state = reducer(state, action, args)
            render()
        }
    }
}