import React, { useEffect } from "react";
import { connect } from "react-redux";
import ExtraRectangle from "../LandingPage/sixthSection/ExtraRectangle";
import { useParams } from "@reach/router";
import TeamHeading from "./TeamHeading";
import TeamList from "./TeamList";
import MemberCard from "./MemberCard";
import Spinner from "../common/Spinner";
import { fetchDepartment } from "../../actions";
import teamData from '../../config/usersDb';

const TeamDetail = (props) => {
  const param = useParams();


  useEffect(() => {
    props.fetchDepartment(param.department);
  }, [param.department.toLowerCase()]);

  const teamMessages = [
    {
      team: "IT",
      message: `
    We feel privileged and empowered when working on your project. Our main  goal is to make sure that we deliver your product on time with high quality. We appreciate your trust.

    We enjoy your product as we are coding, as we enjoy our codes when coding your product.
    `,
    },
    {
      team: "finance",
      message: `
    We are here to serve you wholeheartedly.
    `,
    },
  ];
  const displayMessage = () => {
    const message = teamMessages.filter(
      (mes) => mes.team.toLowerCase() === param.department.toLowerCase()
    );
    return {
      message: message[0].message,
      title: message[0].team,
    };
  };
  const displayMember = () => {

    const ITPeople = teamData.filter(member => member.team.toLowerCase() === 'IT'.toLowerCase());
    const FinancePeople = teamData.filter(member => member.team.toLowerCase() === 'finance'.toLowerCase());

    if(param.department.toLowerCase() === 'IT'.toLowerCase()){
      return ITPeople.map((member) => {
        const { id, name, role, avatar} = member;
        return <MemberCard key={id} name={name} role={role} avatar={avatar} />;
      });
    }else if(param.department.toLowerCase() === 'finance'.toLowerCase()){
      return FinancePeople.map((member) => {
        const { id, name, role, avatar} = member;
        return <MemberCard key={id} name={name} role={role} avatar={avatar} />;
      });
    }else{
      return <div>Users not found</div>
    }
  };

  return (
    <div className="team-content ">
      { teamData === [] ? (
        <Spinner />
      ) : (
        <>
          <div className="team-left-section">
            <div className="left-section__container">
              <TeamHeading
                title={`${displayMessage().title[0].toUpperCase()}${displayMessage().title.substr(
                  1
                )} team`}
              />
              <TeamList>{displayMember()}</TeamList>
            </div>
          </div>
          <div className="team-right-section">
            <div className="upper-part">
              <div className="team-message-container">
                <TeamHeading title="Our message" />
                <div className="team-message">
                  <p>{displayMessage().message}</p>
                </div>
              </div>
            </div>
            <div className="lower-part">
              <ExtraRectangle />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { team: state.team };
};
export default connect(mapStateToProps, { fetchDepartment })(TeamDetail);
