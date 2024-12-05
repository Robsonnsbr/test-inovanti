import Main from 'src/components/main';
import Template from 'src/components/common/template';
import { ContentMain } from 'src/components/common/content';
import { Button } from 'src/components/common/button';
export default function Splashscreen() {
  return (
    <>
      <Main className="pt-0" id="top-main">
        <Template>
          <ContentMain />
          <Button title="Get Started" />
        </Template>
      </Main>
    </>
  );
}
