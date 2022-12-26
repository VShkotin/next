import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

function Search(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Search</Htag>
    </>
  );
}

export default withLayout(Search);
