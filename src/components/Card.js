import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	clicked(card) {
		const { click } = this.props;
		click(card);
	}

	render() {
		const { card, close, complete } = this.props;

		return (
			<div className={`card${!close ? ' opened' : ''}${complete ? ' matched' : ''}`} onClick={() => this.clicked(card)} onKeyPress={this.handleKeyPress} role="button" tabIndex={0}>
				<div className="front">??</div>
				<div className="back">
					<img src={`./img/${card}.png`} alt="Game Element" />
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	card: PropTypes.string.isRequired,
	close: PropTypes.bool.isRequired,
	complete: PropTypes.bool.isRequired,
	click: PropTypes.func.isRequired,
};

export default Card;
