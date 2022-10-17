import React, { useState } from 'react';
import Container from 'src/components/Container';
import Card from 'src/components/Projects/Card';
import Banner from 'src/components/Projects/Banner';
import H2 from 'src/components/Headings/H2';
import { Projects, Banners, Cards } from './styles';
import { useIntl } from 'react-intl';

export default function Works() {
  const [currentCard, setCurrentCard] = useState(0);
  const intl = useIntl();
  const projects = [
    {
      id: 0,
      title: intl.formatMessage({ id: 'works_title' }),
      banner: '/images/banners/netflix.jpg',
      alt: 'Netflix project banner',
      company: 'Hox.rs - 2021',
      link: 'https://www.tudumnetflix.com.br/',
      paragraphs: [
        {
          id: 0,
          paragraph: intl.formatMessage({ id: 'works_netflix_paragraph1' }),
        },
        {
          id: 1,
          paragraph: intl.formatMessage({ id: 'works_netflix_paragraph2' }),
        },
        {
          id: 2,
          paragraph: intl.formatMessage({ id: 'works_netflix_paragraph3' }),
        },
        {
          id: 3,
          paragraph: intl.formatMessage({ id: 'works_netflix_paragraph4' }),
        },
        {
          id: 4,
          paragraph: intl.formatMessage({ id: 'works_netflix_paragraph5' }),
        },
      ],
    },
    {
      id: 1,
      title: intl.formatMessage({ id: 'works_spotify_title' }),
      banner: '/images/banners/spotify.jpg',
      alt: 'Spotify project banner',
      company: 'Hox.rs - 2021',
      link: 'https://spotifytoppodcasters.byspotify.com/',
      paragraphs: [
        {
          id: 0,
          paragraph: intl.formatMessage({ id: 'works_spotify_paragraph1' }),
        },
        {
          id: 1,
          paragraph: intl.formatMessage({ id: 'works_spotify_paragraph2' }),
        },
        {
          id: 2,
          paragraph: intl.formatMessage({ id: 'works_spotify_paragraph3' }),
        },
        {
          id: 3,
          paragraph: intl.formatMessage({ id: 'works_spotify_paragraph4' }),
        },
        {
          id: 4,
          paragraph: intl.formatMessage({ id: 'works_spotify_paragraph5' }),
        },
      ],
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'works_omega_title' }),
      banner: '/images/banners/omega.jpg',
      alt: 'Omega project banner',
      company: 'Hox.rs - 2021',
      link: 'https://www.movimentoluzlivre.com.br/',
      paragraphs: [
        {
          id: 0,
          paragraph: intl.formatMessage({ id: 'works_omega_paragraph1' }),
        },
        {
          id: 1,
          paragraph: intl.formatMessage({ id: 'works_omega_paragraph2' }),
        },
        {
          id: 2,
          paragraph: intl.formatMessage({ id: 'works_omega_paragraph3' }),
        },
      ],
    },
  ];

  return (
    <Container>
      <section id="works" style={{ flexDirection: 'column', alignItems: 'start' }}>
        <H2 reverseBar="reverse">{intl.formatMessage({ id: 'works_title' })}</H2>
        <Projects>
          <Banners>
            {projects.map(({ id, banner, alt }) => (
              <Banner
                onClick={(e) => setCurrentCard(e.target.getAttribute('data-target'))}
                key={id}
                dataTarget={id}
                banner={banner}
                alt={alt}
              />
            ))}
          </Banners>
          <Cards>
            <Card
              key={projects[currentCard].id}
              title={projects[currentCard].title}
              paragraphs={projects[currentCard].paragraphs}
              company={projects[currentCard].company}
              link={projects[currentCard].link}
            />
          </Cards>
        </Projects>
      </section>
    </Container>
  );
}
