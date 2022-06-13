import React, { Component } from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        tikki: 0
    }

    addRemove = (method, ingredient) => {
        let {
            lettuce, tomato, cheese, tikki
        } = this.state;
        let stateValue = this.state[ingredient];
        if (method === "add") {
            stateValue += 1;
        } else {
            stateValue -= 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        }
        );

    }

    burgerContent = () => {
        let {
            lettuce, tomato, cheese, tikki
        } = this.state;

        let burger = [];
        for (let i = 0; i < lettuce; i++) {
            burger.push(<div key={burger.length} className="lettuceSide"></div>)
        }
        for (let i = 0; i < tomato; i++) {
            burger.push(<div key={burger.length} className="tomatoSide"></div>)
        }
        for (let i = 0; i < cheese; i++) {
            burger.push(<div key={burger.length} className="cheeseSide"></div>)
        }
        for (let i = 0; i < tikki; i++) {
            burger.push(<div key={burger.length} className="tikkiSide"></div>)
        }
        return burger;
    }

    render() {
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemove('add', 'lettuce')} >Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemove('remove', 'lettuce')}>Remove</button>
                    </div>
                    <p>Tomato</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemove('add', 'tomato')} >Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemove('remove', 'tomato')}>Remove</button>
                    </div>
                    <p>Cheese</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemove('add', 'cheese')} >Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemove('remove', 'cheese')}>Remove</button>
                    </div>
                    <p>Tikki</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemove('add', 'tikki')} >Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemove('remove', 'tikki')}>Remove</button>
                    </div>
                </div>
            </>
        )
    }
}