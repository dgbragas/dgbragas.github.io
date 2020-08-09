import React, { useState, useEffect, useMemo } from 'react';
import { useMedia } from 'use-media';

import DefaultLayout from '../../layouts/Default';

import AppsCard from '../../components/Cards/AppsCard';
import DesignCard from '../../components/Cards/DesignCard';
import If from '../../components/If';
import Select from '../../components/Select';

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
  type?: string;
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users/dgbragas/repos');
      const allProjects = [...data, ...postsData]?.sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );

      setProjects(allProjects);
    })();
  }, []);

  const filteredProjects = useMemo(() => {
    if (currentFilter === 'design') {
      return projects.filter(({ type }) => !!type);
    }

    if (currentFilter === 'apps') {
      return projects.filter(({ type }) => !type);
    }

    return [];
  }, [currentFilter, projects]);

  function renderProjectsMosaic(data: Array<ProjectProps>) {
    return data.map(project => {
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
    });
  }

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

      {/* <Select
        name="filters"
        defaultValue="all"
        label="Filtre projetos por..."
        options={[
          { value: 'all', label: 'Todos trabalhos' },
          { value: 'design', label: 'UI Design' },
          { value: 'apps', label: 'Apps' },
        ]}
      /> */}

      <S.Portfolio>
        <S.PortfolioNav>
          <S.NavButtons>
            <S.Button
              isCurrent={currentFilter === 'all'}
              onClick={() => setCurrentFilter('all')}
            >
              Todos trabalhos
            </S.Button>
            <S.Button
              isCurrent={currentFilter === 'design'}
              onClick={() => setCurrentFilter('design')}
            >
              UI Design
            </S.Button>
            <S.Button
              isCurrent={currentFilter === 'apps'}
              onClick={() => setCurrentFilter('apps')}
            >
              Apps
            </S.Button>
          </S.NavButtons>
        </S.PortfolioNav>

        <S.PortfolioMosaic>
          <If condition={!!filteredProjects.length}>
            {renderProjectsMosaic(filteredProjects)}
          </If>

          <If condition={!filteredProjects.length}>
            {renderProjectsMosaic(projects)}
          </If>
        </S.PortfolioMosaic>
      </S.Portfolio>
    </DefaultLayout>
  );
};

export default Home;
