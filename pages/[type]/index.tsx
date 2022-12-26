import { Htag } from '../../components';
import { withLayout } from '../../layout/Layout';

function Courses(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Courses</Htag>
    </>
  );
}

export default withLayout(Courses);
