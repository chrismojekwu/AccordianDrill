import React from 'react';

class Accordian extends React.Component {
    static defaultProps = { 
        sections:[] 
    };

    state = {
        listIndex:0
    };

    handleClickSetIndex(index) {
        this.setState({listIndex:index})
        //console.log(index)
    }

    renderButtons() {
        return this.props.sections.map((section,index) => {
            const showSection = index === this.state.listIndex
            let content = (<p>{section.content}</p>)
            if(!showSection){
                content = ""
            }
            return (
                <li>
                    <button 
                    key={index}
                    className="sections"
                    onClick={() => this.handleClickSetIndex(index)}
                    >
                        {section.title}
                    </button>
                    {content}
                </li>
            )
        })
    }
    
    renderSection() {
        const current = this.props.sections[this.state.listIndex]
          return (
              <p className="content">
                  {current.content}
              </p>
          )
    }

    render (){
        return (
            <ul>
                {this.renderButtons()}
                
            </ul>
        )
    }
}

export default Accordian;
