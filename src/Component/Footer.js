import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div className="ui container mt-[25px]" id="footer">
                <div className="ui grid stackable">
                    <div className="four wide column text-center">
                        <div className="ui header medium container">
                            Contact
                            <div className="mb-[10px]"></div>
                            <div className="text-[14px]">Phone Number</div>
                            <div className="font-light ml-[10px] text-[14px]">0712384932</div>
                            <div className="text-[14px]">Email</div>
                            <div className="font-light ml-[10px] text-[14px]">acem@gmail.com</div>
                        </div>
                    </div>
                    <div className="seven wide column">
                        <div className="ui header medium container">
                            <div className="w-full text-center">Inspiration</div>
                            <div className="mb-[10px]"></div>
                            <div className="text-[14px]">Proverbs 1:12-15</div>
                            <div className="font-light text-[14px] text-container">
                                tortor erat aenean. Ut tempus nibh sed a erat mauris porttitor.Lorem ipsum 
                                dolor sit amet consectetur. Donec pretium velit tortor viverra elit. Tincidunt
                            </div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className="ui header medium w-full text-center">Location</div>
                        <div className="ui grid container">
                            <div className="eight wide column">
                                <div className="flex justify-center items-center w-full h-full">
                                    <div className="ui button primary">Pin Location</div>
                                </div>
                            </div>
                            <div className="eight wide column">
                                <div className="ui small image">
                                    <img src="./images/QR-Code.png" alt="QR Code"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;