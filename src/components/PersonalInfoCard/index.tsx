import React from 'react';
import { PersonalInfoCardProps } from '../../core/types/ComponentProps';
import { ArrowBack } from '@mui/icons-material';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  name,
  avatar,
  occupation,
  education,
  isOnHomePage,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      {!isOnHomePage && (
        <button className={'arrow-back-btn'} onClick={() => navigate(-1)}>
          <ArrowBack className={'arrow-back-icon'} />
        </button>
      )}
      <img
        className={'rounded-picture'}
        src={avatar}
        alt="carolina-simoes-linkedin"
      />
      <h2>{name}</h2>
      <div className={'blue-line'} />
      <h3>{occupation}</h3>
      <div className={'blue-line'} />
      <h3>{education}</h3>
    </div>
  );
};

export default PersonalInfoCard;
