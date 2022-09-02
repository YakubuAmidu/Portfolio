import React from 'react';
import './SocialProfiles.scss';
import SOCIAL_PROFILES from '../../data/socialProfiles';

const SocialProfile = (props) => {
  const { link, image } = props.SocialProfile;

  return (
    <span>
      <a href={link}>
        <img src={image} alt='img' className='social__images' />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div className='social'>
    <h1 className='social__connect'>Connect with me</h1>
    <div className='social__icons'>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
        return (
          <SocialProfile
            key={SOCIAL_PROFILE.id}
            SocialProfile={SOCIAL_PROFILE}
          />
        );
      })}
    </div>

    <div className='social__copy'>&copy; 2021 YAKUBU. ALL RIGHT RESERVED</div>
  </div>
);

export default SocialProfiles;
