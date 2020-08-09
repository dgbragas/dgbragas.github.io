import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GridContainer from '../components/GridContainer';

const MainContent = styled.main``;

const Default: React.FC = ({ children }) => (
  <>
    <Header />
    <MainContent>
      <GridContainer>{children}</GridContainer>
    </MainContent>
    <Footer />
  </>
);

export default Default;
