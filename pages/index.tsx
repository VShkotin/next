import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h3'>Test</Htag>
      <Button appearance='primary'>Button</Button>
      <Button appearance='ghost' arrow='right'>
        Button
      </Button>
      <P size='l'>Test</P>
      <P size='m'>Test 1</P>
      <P size='s'>Test 2</P>
      <Tag size='s' color='green'>
        Tag1
      </Tag>
      <Tag color='red'>Tag1</Tag>
      <Tag color='primary'>Tag1</Tag>
      <Tag color='ghost'>Tag1</Tag>
      <Rating rating={4} />
      <Rating rating={rating} isEditable setRating={setRating} />
      {/* <ul>
        {menu.map((m, i) => (
          <li key={i}>{m._id.secondCategory}</li>
        ))}
      </ul> */}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
