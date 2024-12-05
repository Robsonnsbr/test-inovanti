import React from 'react';
import ContainerMedium from 'src/components/common/container/ContainerMedium';

function Template({ children }: any) {
  return (
    <section className="global-section">
      <ContainerMedium id="container-create-item">
        <div className="flex flex-col">{children}</div>
      </ContainerMedium>
    </section>
  );
}

export default Template;
