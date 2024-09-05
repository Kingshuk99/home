import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import SkillsRow from "./SkillsRow";

function Skills({ heading, programming, frameworks, tools,miscellaneous, technologies}) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
//   const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <SkillsRow 
            type="Programming languages"
            skills={programming}
        />
        <SkillsRow
            type="Frameworks"
            skills={frameworks}
        />
        <SkillsRow
            type="Tools"
            skills={tools}
        />
        <SkillsRow
            type="Miscellaneous"
            skills={miscellaneous}
        />
        <SkillsRow
        	type="Technologies"
			    skills={technologies}
		    />
      </Container>
    </Jumbotron>
  );
}

export default Skills;