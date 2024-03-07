import { Component } from "react";

class ProjectDonation extends Component{
    render(){
        return(
            <div className="background-container w-full mt-[25px]" id="donate">
                <div className="ui container pt-[25px] pb-[50px]">
                    <div className="ui header large w-full text-center">Mega Project</div>
                    <div className="w-full mt-[50px]">
                        <div className="ui grid stackable">
                            <div className="eight wide column">
                                <div className="ui header medium w-full text-center underline">A Vision Whoes Time Has Come</div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur. Donec pretium velit tortor viverra 
                                    elit. Tincidunt non non tincidunt facilisis. Velit in nibh ut enim aliquet ac 
                                    tortor erat aenean. Ut tempus nibh sed a erat mauris porttitor.
                                    Lorem ipsum dolor sit amet consectetur. Donec pretium velit tortor viverra 
                                    elit. Tincidunt non non tincidunt facilisis. Velit in nibh ut enim aliquet ac 
                                    tortor erat aenean. Ut tempus nibh sed a erat mauris porttitor.
                                </div>
                            </div>
                            <div className="eight wide column">
                                <div className="ui header small">Till Number</div>
                                <div className="ui bg-[#73A0AE] flex items-center p-[10px] rounded-[4px] font-bold text-white">2146 - 3242</div>
                                <div className="ui header small">Account Name</div>
                                <div className="ui bg-[#73A0AE] flex items-center p-[10px] rounded-[4px] font-bold text-white">
                                    Apostolic Church Evangelistic Ministry
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ProjectDonation;