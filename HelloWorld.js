import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            who: "World"
        }
    }

    handleButtonClick = (who) => {
      //console.log('click')
        this.setState({
        who
    })
    }
    

    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                 <button onClick={() => this.handleButtonClick("World")}>World</button>
                 <button onClick={() => this.handleButtonClick("Friend")}>Friend</button>
                 <button onClick={() => this.handleButtonClick("React")}>React</button>

            </div>
        )
    }
}

export default HelloWorld;