import React, { Component } from 'react';

import "../App.css"


export default class buttons extends Component {

    onClickEvent = (e) => (


        this.setState({ sayi1 : e.target }),


        

        
        


    )
    state = {
        sayi1 : null,
        sayi2 : null,
        sonuc : null,
        islem : null
    }

    render() {

        const {sayi1,sayi2} = this.state;

        return (
            <div>
                <div className="sonuc">
                    <input type="number" className="inputtext" />
                </div>
                <div className="App">
                    <button className="Button" onClick={this.onClickEvent} >1</button>
                    <button className="Button" onClick={this.onClickEvent} >2</button>
                    <button className="Button" onClick={this.onClickEvent} >3</button>
                    <button className="Button" onClick={this.onClickEvent} >4</button>
                    <button className="Button" onClick={this.onClickEvent} >5</button>
                    <button className="Button" onClick={this.onClickEvent} >6</button>
                    <button className="Button" onClick={this.onClickEvent} >7</button>
                    <button className="Button" onClick={this.onClickEvent} >8</button>
                    <button className="Button" onClick={this.onClickEvent} >9</button>
                    <button className="Button" name="Operation" onClick={this.onClickEvent} >+</button>
                    <button className="Button" onClick={this.onClickEvent} >0</button>
                    <button className="Button" name="Operation" onClick={this.onClickEvent} >*</button>
                    <button className="Button" name="Operation" onClick={this.onClickEvent} >-</button>
                    <button className="Button" onClick={this.onClickEvent} >AC</button>
                    <button className="Button" name="Operation" onClick={this.onClickEvent} >/</button>

                </div>
            </div>
        );
    }
}

function calculate(obj, buttonName) {



}
