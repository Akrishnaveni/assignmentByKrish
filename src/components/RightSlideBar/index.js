import { Chrono } from "react-chrono";
import { IoLocationSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

import "./index.css";

const data = [
  {
    name: "Frontend Developer with Angular",
    company: "WalletHub",
    location: "Washington,DC",
    workmode: "Remote",
    skills: ["angular js", "cord rova"],
  },
  {
    name: "Senior IOS/Iphone Engineer",
    company: "PerkCom.Inc",
    location: "Bangaloor,Ind",
    workmode: "WFH",
    skills: ["IOS", "iPhone"],
  },
  {
    name: "Software Engineer",
    company: "SparkNet Technologies",
    salary: "$25000-$45000",
    location: "No location",
    workmode: "Remote",
    skills: ["IOS", "Ruby on Rails"],
  },
];

const RightSlideBar = () => {
  return (
    <div className="chrono-container">
      <p> Looking For ....</p>
      <Chrono
        theme={{
          secondary: "white",
        }}
        items={data}
        mode="VERTICAL"
      >
        {data.map((eachItem) => (
          <div>
            <h1 className="job-title">{eachItem.name}</h1>
            <p className="company">{eachItem.company}</p>
            {eachItem.salary !== undefined && (
              <p className="sal">{eachItem.salary}</p>
            )}
            <div className="loc-mode">
              <p className="location">
                <IoLocationSharp />{" "}
                <span className="loc">{eachItem.location}</span>
              </p>
              <p className="mode">
                {eachItem.workmode === "Remote" && <FaGlobeAmericas />}
                {eachItem.workmode !== "Remote" && <HiOfficeBuilding />}{" "}
                <span className="loc">{eachItem.workmode}</span>
              </p>
            </div>
            <ul className="skills-list">
              {eachItem.skills.map((each) => (
                <div>
                  <li className="skill">{each}</li>
                </div>
              ))}
            </ul>
            <hr />
          </div>
        ))}
      </Chrono>
    </div>
  );
};
export default RightSlideBar;
