# Arrow function : should use key 'const'

```bash
const function_name = (props) => {}
```

# There are 2 component type :

## 1.Functional component

```bash
const function_name = (props) => {}
```

## 2.Class component

```bash
class class_name extends Component
{
    constructor(props) {
        super(props)
    }
}
```

# To Set double State have to use callback function.

## wrong

```bash
this.setState({ a:10 })
this.setState({ total: ( a + b ) })
```

## Have to use callback function to `state` updated by that before setState function.

```bash
this.setState({ a:10 })
this.setState((state) => {
    const sum = a + b

    return { total:sum }
})
```

# React Redux

## Function mapStateToProps method : It will reference the state of Store to props of component.

## The component only re-render when state in mapStateToProps method is changed.

```bash
const mapStateToProps = ( state, ownProps ) => {
    return { myProps: state.myProps}
}
```

## Function mapDispatchToProps method : It will reference the dispatch of Store to props of component.

```bash
const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        dispatchMyActionAtComponent : ( args ) => {
            dispatch({ type: 'typeActionName', payload: args})
        }
    }
}
```

## After connection mapStateToProps and mapDispatchToProps methods to props of The component.

```bash
export default connect( mapStateToProps, mapDispatchToProps )(ComponentName))
```

## React Redux Hook only working for Functional Component.

### Some hooks from react-redux

```bash
import { connect, useDispatch, useSelector } from 'react-redux'
```

# Redux Saga : key \* and yield .

## \*: generator function

## yield: equivalent return value.

```bash
function* function_name(args) {
    const a = 1
    yield a // return a
    return a
}
```

## Init generator function and not yet running nothing which code.

```bash
const a = 5
const generatorFunc = function_name(a)
```

## Running the code to yield if function not completed ,

## yield return object1 = {value: value1, done: false}

## running to `return a` because function has completed , yield return object2 = {value: value2, done: true}

```bash
var object1 = generatorFunc.next()
var object2 = generatorFunc.next()
```
