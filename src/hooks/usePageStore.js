import { useEffect } from 'react';
import { pageStore } from '../stores/PageStore.js';
import useForceUpdate from './useForceUpdate.js';

export default function usePageStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    pageStore.subscribe(forceUpdate);

    return () => pageStore.unsubscribe(forceUpdate);
  });

  return pageStore;
}
