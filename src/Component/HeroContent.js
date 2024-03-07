import { Component } from "react";
import InspirationModal from "./InspirationModal";

class HeroContent extends Component{
    render(){
        return(
            <div className="h-full" id="sm-home">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="w-[80%] text-center">
                        <div className="font-bold text-[18px] md:text-[32px] spaced-header">Apostolic Church Evangelistic Ministry</div>
                        <div className="ui segment basic">
                            Lorem ipsum dolor sit amet consectetur. Donec pretium velit tortor viverra 
                            elit. Tincidunt non non tincidunt facilisis. Velit in nibh ut enim aliquet ac 
                            tortor erat aenean. Ut tempus nibh sed a erat mauris porttitor.
                        </div>
                        <InspirationModal />
                    </div>
                </div>
                <a href="#home">
                    <button className="ui button black back-top-button" id="scroll-button"><i className="ui arrow up icon" /></button>
                </a>
            </div>
        );
    };
};

export default HeroContent;