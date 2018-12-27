import React, { Component } from 'react';


class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	clicked(framework) {
		this.props.click(framework);
	}

	render() {
		return (
			<div className={`card${!this.props.close ? ' opened' : ''}${this.props.complete ? ' matched' : ''}`} onClick={() => this.clicked(this.props.framework)}>
				<div className="front">??</div>
				<div className="back">
					<img src={`./img/${this.props.framework}.png`} alt="Game Element" />
				</div>
			</div>
		);
	}
}

export default Card;
