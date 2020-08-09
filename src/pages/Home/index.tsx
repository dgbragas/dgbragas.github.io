import React, { useState, useEffect } from 'react';

import DefaultLayout from '../../layouts/Default';

import AppsCard from '../../components/Cards/AppsCard';
import DesignCard from '../../components/Cards/DesignCard';

import api from '../../services/api';
import postsData from '../../assets/posts/posts.data.js';

import * as S from './styles';

interface ProjectProps {
  id: number;
  name: string;
  title?: string;
  html_url?: string;
  images: string[];
  description: string;
  previewURL?: string;
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users/dgbragas/repos');
      const allProjects = [...data, ...postsData]?.sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );

      setProjects(allProjects);
    })();
  }, []);

  return (
    <DefaultLayout>
      <S.Introduction>
        <S.Title>
          Designer de Interfaces & Desenvolvedor Front-end da região do Grande
          ABC, São Paulo
        </S.Title>
        <S.Description>
          Entregando as melhores soluções às companhias através de uma stack
          focada em tecnologia e design.
        </S.Description>

        <S.Social>
          <S.SocialLink>Instagram</S.SocialLink>
          <S.SocialLink>LinkedIn</S.SocialLink>
          <S.CVLink>Currículo profissional</S.CVLink>
        </S.Social>
      </S.Introduction>

      <S.Portfolio>
        <S.PortfolioNav>
          <S.NavButtons>
            <S.Button isCurrent>Todos trabalhos</S.Button>
            <S.Button isCurrent={false}>UI Design</S.Button>
            <S.Button isCurrent={false}>Apps</S.Button>
          </S.NavButtons>
        </S.PortfolioNav>

        <S.PortfolioMosaic>
          {projects.map(project => {
            if (project.images) {
              return (
                <DesignCard
                  linkTo={{
                    pathname: '/project',
                    state: {
                      images: project.images,
                      title: project.title,
                      full_description: project.description,
                      previewURL: project.previewURL,
                    },
                  }}
                  title={project.title}
                  client={project.name}
                  imageURL={project.images[0]}
                />
              );
            }

            return (
              <AppsCard
                redirectTo={project.html_url}
                title={project.name}
                description={project.description}
              />
            );
          })}
        </S.PortfolioMosaic>
      </S.Portfolio>
    </DefaultLayout>
  );
};

export default Home;
