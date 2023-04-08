import React from 'react';
import ReactJS from '../../assets/svgs/reactjs.svg?component';
import NodeJS from '../../assets/svgs/nodejs.svg?component';
import TS from '../../assets/svgs/ts.svg?component';
import EXPO from '../../assets/svgs/expo.svg?component';
import RABBITMQ from '../../assets/svgs/rabbitmq.svg?component';
import { Tooltip } from '@mui/material';
import { SKILLS } from '../../core/constants/AppConstants';

type TechnologyLogoProps = {
  skill: string;
};

export const TechnologyLogo: React.FC<TechnologyLogoProps> = ({ skill }) => {
  if (skill.toLowerCase() === SKILLS.REACTJS)
    return (
      <Tooltip key={skill} title={skill}>
        <span>
          <ReactJS className="icon" />
        </span>
      </Tooltip>
    );
  else if (skill.toLowerCase() === SKILLS.NODEJS)
    return (
      <Tooltip key={skill} title={skill}>
        <span>
          <NodeJS className="icon" />
        </span>
      </Tooltip>
    );
  else if (skill.toLowerCase() === SKILLS.TS)
    return (
      <Tooltip key={skill} title={skill}>
        <span>
          <TS className="icon" />
        </span>
      </Tooltip>
    );
  else if (skill.toLowerCase() === SKILLS.EXPO)
    return (
      <Tooltip key={skill} title={skill}>
        <span>
          <EXPO className="icon" />
        </span>
      </Tooltip>
    );
  else if (skill.toLowerCase() === SKILLS.RABBITMQ)
    return (
      <Tooltip key={skill} title={skill}>
        <span>
          <RABBITMQ className="icon" />
        </span>
      </Tooltip>
    );
  else return <></>;
};
