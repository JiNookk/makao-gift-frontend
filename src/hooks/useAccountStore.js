import { useEffect } from 'react';
import { accountStore } from '../stores/AccountStore.js';
import useForceUpdate from './useForceUpdate.js';

export default function useAccountStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    accountStore.subscribe(forceUpdate);

    return () => accountStore.unsubscribe(forceUpdate);
  });

  return accountStore;
}
