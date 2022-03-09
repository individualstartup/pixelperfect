import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationComponent from './Navigation';

interface ComponentProps {}

const BannerComponent: React.FC<ComponentProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Banner>
      <BannerInner>
        <Logo>
          office<span>on</span>the<span>road</span>.cz
        </Logo>
        <NavigationComponent open={open} setOpen={setOpen} />
      </BannerInner>
    </Banner>
  );
};

const Logo = styled.p`
  font-size: 1.875rem;
  margin-bottom: 1.8125rem;
  margin-top: 1.875rem;
  span {
    font-weight: 900;
  }
`;

const BannerInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
  max-width: 74.625rem;
`;
const Banner = styled.div`
  color: #575e68;
  background: rgba(245, 245, 245, 0.85);
  backdrop-filter: blur(4px);
  font-family: Roboto, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export default BannerComponent;
