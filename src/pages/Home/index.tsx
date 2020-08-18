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

  const isTablet = useMedia({ maxWidth: 900 });

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
          Entregando as melhores soluções para companhias através de uma stack
          focada em Tecnologia e Design.
        </S.Description>

        <S.Social>
          <S.SocialLink href="https://github.com/dgbragas" target="_blank">
            GitHub
          </S.SocialLink>
          <S.SocialLink href="https://linkedin.com/in/dgbragas" target="_blank">
            LinkedIn
          </S.SocialLink>
          <S.CVLink
            href="https://drive.google.com/file/d/1utSmkb-WGns5hloKmTXD1fPLk8k1cz5V/view?usp=sharing"
            target="_blank"
          >
            Currículo profissional
          </S.CVLink>
        </S.Social>
      </S.Introduction>

      <S.Portfolio>
        <S.PortfolioNav>
          <If condition={isTablet}>
            <Select
              name="filters"
              defaultValue="all"
              label="Filtre projetos por..."
              value={currentFilter}
              onChange={({ target }) => setCurrentFilter(target.value)}
              options={[
                { value: 'all', label: 'Todos trabalhos' },
                { value: 'design', label: 'UI Design' },
                { value: 'apps', label: 'Apps' },
              ]}
            />
          </If>

          <If condition={!isTablet}>
            <S.NavButtons>
              <S.Button
                isCurrent={currentFilter === 'all'}
                onClick={() => setCurrentFilter('all')}
              >
                Todos
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
          </If>
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
