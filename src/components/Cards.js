import React, { Component } from 'react';
import Card from './Card';


class Cards extends Component {
	constructor(props) {
		super(props);


		this.state = {
			frameworks: ['1', '2', '3', '4', '5', '6', '7', '8'],

			duplicatedCards: [],
			randomCards: [],
			finalizedCards: [],
			openedCards: [],
		};
	}

	componentWillMount() {
		this.start();
	}

	handleClick(name, index) {
		const { openedCards } = this.state;
		if (openedCards.length === 2) {
			setTimeout(() => {
				this.check();
			}, 750);
		} else {
			const framework = {
				name,
				index,
			};
			const { finalizedCards } = this.state;
			const frameworks = openedCards;
			finalizedCards[index].close = false;
			frameworks.push(framework);
			this.setState({
				openedCards: frameworks,
				finalizedCards,
			});
			if (openedCards.length === 2) {
				setTimeout(() => {
					this.check();
				}, 750);
			}
		}
	}

	check() {
		const { finalizedCards, openedCards } = this.state;
		if ((openedCards[0].name === openedCards[1].name) && (openedCards[0].index !== openedCards[1].index)) {
			finalizedCards[openedCards[0].index].complete = true;
			finalizedCards[openedCards[1].index].complete = true;
		} else {
			finalizedCards[openedCards[0].index].close = true;
			finalizedCards[openedCards[1].index].close = true;
		}
		this.setState({
			finalizedCards,
			openedCards: [],
		});
	}

	start() {
		let { duplicatedCards, randomCards } = this.state;
		const { frameworks } = this.state;
		const finalizedCards = [];
		duplicatedCards = frameworks.concat(frameworks);
		randomCards = this.shuffle(duplicatedCards);
		randomCards.map((name, index) => finalizedCards.push({
			name,
			close: true,
			complete: false,
			fail: false,
			key: { index },
		}));
		this.setState({ finalizedCards });
	}

	shuffle(array) {
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}


	render() {
		const { finalizedCards } = this.state;
		return (
			<div className="playground">
				{
					finalizedCards.map((card, index) => <Card card={card.name} click={() => { this.handleClick(card.name, index); }} close={card.close} complete={card.complete} key={index} />)
				}
			</div>
		);
	}
}


export default Cards;
