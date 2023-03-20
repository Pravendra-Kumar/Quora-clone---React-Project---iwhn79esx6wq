import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://nct.ac.in/assets/img/history/slider/2.png"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://i2.wp.com/psychlearningcurve.org/wp-content/uploads/2019/12/skills.png?w=1000&ssl=1"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.thedailymeal.com/img/gallery/basic-cooking-methods-you-need-to-know/Basic-Cooking-Methods.webp"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.brainkart.com/article/articleTEVa9s13.png"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-300x186.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/lead-image-book-template-01-1-1671039379.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cie.spacefoundation.org/wp-content/uploads/2022/07/Astronaut-300x187.jpg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://i2.wp.com/www.differencebetween.com/wp-content/uploads/2015/04/Difference-Between-School-and-Education_Education.jpg?zoom=1.5&resize=521%2C500&ssl=1"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
