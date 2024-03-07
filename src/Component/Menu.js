import { Component } from "react";

class Menu extends Component{
    render(){
        return(
            <div className="ui container" id="lg-menu">
                <div className="ui pointing secondary menu" id="home">
                    <div className="item">
                        Apostolic Church Evangelistic Ministry<span className="font-bold">(ACEM)</span>
                    </div>
                    <a href="#home" className="right item active">Home</a>
                    <a href="#about" className="item">About</a>
                    <a href="#footer" className="item">Contact</a>
                    <div className="right item">
                        <a className="ui button primary" href="#donate">
                            Donate
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Menu;