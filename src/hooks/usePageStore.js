import { useEffect } from 'react';
import { pageStore } from '../stores/PageStore';
import useForceUpdate from './useForceUpdate';

export default function usePageStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    pageStore.subscribe(forceUpdate);

    return () => pageStore.unsubscribe(forceUpdate);
  });

  return pageStore;
}
