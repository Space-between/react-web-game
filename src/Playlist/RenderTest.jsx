import React, { PureComponent } from 'react';

//PureComponent를 사용하여서 스테이트가 바뀔때만 랜더가 되기위해 만들어주고 setState할떄는 [...this.state.array, 1]이런식으로 불변하게 만들어야 한다.

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // };

    onClick = () => {
        this.setState({
            array: [...this.state.array, 1],
        });
    };

    render() {
        console.log('렌더링', this.state);
        return(
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test;