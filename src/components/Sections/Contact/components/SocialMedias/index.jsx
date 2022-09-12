import React from 'react';
import Figma from 'src/components/Icons/Figma';
import Github from 'src/components/Icons/Github';
import Instagram from 'src/components/Icons/Instagram';
import LinkedIn from 'src/components/Icons/LinkedIn';
import { SocialMediasStyles, SocialMedia, SocialMediaGroup } from './styles';

export default function SocialMedias() {
  return (
    <SocialMediasStyles>
      <SocialMediaGroup>
        <LinkedIn />
        <SocialMedia
          target="_blank"
          href="https://www.linkedin.com/in/jos%C3%A9-victor-dev/"
        >
          LinkedIn
        </SocialMedia>
      </SocialMediaGroup>
      <SocialMediaGroup>
        <Github />
        <SocialMedia target="_blank" href="https://github.com/victormedeiros1">
          Github
        </SocialMedia>
      </SocialMediaGroup>
      <SocialMediaGroup>
        <Figma />
        <SocialMedia target="_blank" href="https://www.figma.com/@db5a2c1e_5665_4">
          Figma
        </SocialMedia>
      </SocialMediaGroup>
      <SocialMediaGroup>
        <Instagram />
        <SocialMedia target="_blank" href="https://www.instagram.com/victor_mdrss/">
          Instagram
        </SocialMedia>
      </SocialMediaGroup>
    </SocialMediasStyles>
  );
}
