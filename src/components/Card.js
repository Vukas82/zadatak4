import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	clicked(framework) {
		const { click } = this.props;
		click(framework);
	}

	render() {
		const { framework, close, complete } = this.props;

		return (
			<div className={`card${!close ? ' opened' : ''}${complete ? ' matched' : ''}`} onClick={() => this.clicked(framework)} onKeyPress={this.handleKeyPress} role="button" tabIndex={0}>
				<div className="front">??</div>
				<div className="back">
					<img src={`./img/${framework}.png`} alt="Game Element" />
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	framework: PropTypes.string.isRequired,
	close: PropTypes.bool.isRequired,
	complete: PropTypes.bool.isRequired,
	click: PropTypes.func.isRequired,
};

export default Card;
