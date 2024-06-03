import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import Home from '@/components/pages/home';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { fetchHomeData } from '@/app/api';

export const metadata = generateMetadata({ title: 'Home' }, { withSuffix: true });

const Index = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['home'],
    queryFn: fetchHomeData
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
     </HydrationBoundary>
  );
};

export default Index;