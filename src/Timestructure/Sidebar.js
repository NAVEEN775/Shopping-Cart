import Timeline from "../Timestructure/Timeline";
import "../Timestructure/Sidebar.css";
import { useState } from "react";
export default function Sidebar() {
  const users = [
    {
      us: {
        id: 1,
        name: "Naveen",
        date: "13thfeb2023",
      },
      us1: {
        id: 2,
        name: "Sivakunmar",
        date: "13thfeb2023",
      },
    },
  ];
  const [dels, setDels] = useState(users);
  const handledelete = (id) => {
    setDels(dels.filter((rem) => rem.id !== id));
  };
  return (
    <div className="sidecontainer">
      <div className="sidenav">
        <div className="profile">
          <img src="profile.png" alt="profile pic logo" />
          <div className="details">
            <p>
              Chinthoju Naveen
              <br />
              Digital Engineering
            </p>
          </div>
        </div>
        <div className="names">
          <div className="names1">
            <img src="grouplogo.png" alt="group logo" />
            <p>Recent Discussion</p>
          </div>
          <div className="list">
            <ol>
              <li>Naveen (M1093356)</li>
              <li>Prem (M10945678)</li>
              <li>Senthil (M1094568)</li>
              <li>Ratul (M1092345)</li>
              <li>Pooja (1234567)</li>
            </ol>
          </div>
        </div>
        <div className="pinned">
          <div className="pinnedlogo">
            <img src="pinnedlogo.png" alt="pinned logo" />
            <p>Pinned</p>
          </div>

          <div className="ver">
            {dels.map((rem, idx) => (
              <div className="hori">
                <div className="ver1">
                  <p>{rem.us.name}</p>
                  <h1>{rem.us.date}</h1>
                  <img
                    src="delete.png"
                    alt="delete logo"
                    onClick={() => handledelete(rem.id)}
                  />
                </div>
              </div>
            ))}
            <div className="hori1">
              <div className="ver2">
                <p>Shivakumar</p>
                <h1>13th Feb 2023</h1>
                <img src="delete.png" alt="delete logo" />
              </div>
            </div>

            <div className="hori2">
              <div className="ver3">
                <p>Senthil </p>
                <h1>13th Feb 2023</h1>
                <img src="delete.png" alt="delete logo" />
              </div>
            </div>
            <div className="hori3">
              <div className="ver4">
                <p>Jana</p>
                <h1>13th Feb 2023</h1>
                <img src="delete.png" alt="delete logo" />
              </div>
            </div>
            <div className="hori4">
              <div className="ver5">
                <p>Rekha</p>
                <h1>13th Feb 2023</h1>
                <img src="delete.png" alt="delete logo" />
              </div>
            </div>
          </div>

          <div className="todo">
            <div className="todoh">
              <img src="tofo.png" alt="todo list logo" />
              <p>To do List</p>
            </div>
            <div className="nam">
              <div className="circle">
                <p>CH</p>
              </div>
              <div className="namd">
                Rejected Timesheet
                <p>Chinthoju Naveen [M1093356]</p>
              </div>
            </div>
            <div className="nam1">
              <div className="circle1">
                <p>SV</p>
              </div>
              <div className="namd1">
                Rejected Timesheet
                <p>Sivakumar V [m1234567]</p>
              </div>
            </div>
            <div className="nam2">
              <div className="circle2">
                <p>PS</p>
              </div>
              <div className="namd2">
                Rejected Timesheet
                <p>Partha [M1234567]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbar">
        <div className="search">
          <input type="text" placeholder="Search MID" />
        </div>
        <div className="verline"></div>
        <div className="flowchart">
          <div className="recs">
            <p>Naveen</p>
            <div className="vers"></div>
            <div className="cir1">
              <h1>Start</h1>
            </div>
            <div className="vers1"></div>
            <div className="vers2">
              <h2>Feb 2023</h2>
            </div>
            <div className="vers3"></div>
          </div>
        </div>
        <div className="timeline-structure">
          <Timeline />
          <div className="f1"></div>
        </div>
      </div>
    </div>
  );
}
