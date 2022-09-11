import React from 'react';
import Figma from 'src/components/Icons/Figma';
import Github from 'src/components/Icons/Github';
import Instagram from 'src/components/Icons/Instagram';
import LinkedIn from 'src/components/Icons/LinkedIn';
import { SocialMediasStyles, SocialMedia, SocialMediaGroup } from './styles';

const SocialMedias = () => {
  return (
    <SocialMediasStyles>
      <SocialMediaGroup>
        <LinkedIn />
        <SocialMedia href="#">LinkedIn</SocialMedia>
      </SocialMediaGroup>
      <SocialMediaGroup>
        <Github />
        <SocialMedia href="#">Github</SocialMedia>
      </SocialMediaGroup>
      <SocialMediaGroup>
        <Figma />
        <SocialMedia href="#">Figma</SocialMedia>
      </SocialMediaGroup>
      <SocialMediaGroup>
        <Instagram />
        <SocialMedia href="#">Instagram</SocialMedia>
      </SocialMediaGroup>
    </SocialMediasStyles>
  );
};

export default SocialMedias;
