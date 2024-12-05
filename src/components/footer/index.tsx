import React, { HTMLAttributes } from 'react';
import ContainerMedium from '../common/container/ContainerMedium';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer {...rest} className="global-height-footer  text-black bg-white">
      <hr className={`border  border-mediumGray`} />
      <section className="global-section pb-8">
        <ContainerMedium id="container-bottom-footer"></ContainerMedium>
      </section>
    </footer>
  );
};

export default Footer;
