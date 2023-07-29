import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Colegio José de Escandón La Salle, Tamaulipas
        </h3>
        <p>Bachillerato</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Universidad Politécnica de Victoria, Tamaulipas
        </h3>
        <p>Universidad</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Agosto 2022 - Diciembre 2022"
          iconStyle={{ background: "#d65959", color: "#fff" }}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-work">
          Ingeniero de Software, Tamaulipas (Pasante)
        </h3>
        <p>Universidad Politécnica de Victoria</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mayo 2023 - Julio 2023"
          iconStyle={{ background: "#d65959", color: "#fff" }}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-work">
          Test Engineer, Jalisco
        </h3>
        <p>IBM</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;