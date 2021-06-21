import React from 'react';
import { PersonalInfoCardProps } from '../../types/ComponentProps';
import { ArrowBack } from '@material-ui/icons';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ name, avatar, occupation, education, isOnHomePage }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            {!isOnHomePage &&
                <button className={'arrow-back-btn'} onClick={() => history.goBack()}>
                    <ArrowBack className={'arrow-back-icon'} />
                </button>
            }
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
}

export default PersonalInfoCard;