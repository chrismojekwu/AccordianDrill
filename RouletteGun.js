import React from 'react';

class RouletteGun extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false

        }
    }
    
    handleButtonClick = () => {
      this.setState({
          spinningTheChamber:true,
       })
       setTimeout(() => { this.setState({
        spinningTheChamber:false,
         chamber: Math.ceil(Math.random() * 8)
         }) }, 2000)
        
      }

    generateMessage = () => {
        if(this.state.spinningTheChamber){
            return "spinning the chamber and pulling the trigger! ..."
        }if (this.state.chamber === this.props.bulletInChamber){
            return "Bang!!!"
        }else {
            return "You're safe!"
        }
    }  

    render(){
        return (
            <div>
                <p>{this.generateMessage()}</p>
                <button
                onClick={this.handleButtonClick}
                >Pull the trigger</button>
            </div>
        )
    }

}

export default RouletteGun;