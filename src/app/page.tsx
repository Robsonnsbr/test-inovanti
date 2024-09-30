import Main from 'src/components/main';
import TemplateTask from 'src/components/home/templates/templateTask';
import TemplateListItems from 'src/components/home/templates/templateListItems';
export default function Home() {
  return (
    <>
      <Main className="pt-0" id="top-main">
        <TemplateTask />
        <TemplateListItems />
      </Main>
    </>
  );
}
