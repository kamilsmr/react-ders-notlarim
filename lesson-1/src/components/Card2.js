import React, { Component } from "react";

class Card2 extends Component {
    constructor(props){
        super(props);
        this.state = { isVisible: false };
    }
    isVisible = () => {
        this.setState({isVisible: !this.state.isVisible });
    };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Aavatar"
        style={{ width: "50%" }}
        />
        { isVisible ? (

            <div>
                <h4>
                <b>{this.props.name}</b>
                </h4>
                <p>{this.props.job}</p>
            </div>

        ) : null}
        <button className="button" onClick={this.isVisible}>Show/Hide</button>

       
          
      </div>
    );
  }
}

export default Card2;
