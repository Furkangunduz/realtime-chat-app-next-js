import { FC } from 'react';
import Button from '@/components/ui/Button';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <Button isLoading={false}>HelloWorld</Button>;
};

export default page;
