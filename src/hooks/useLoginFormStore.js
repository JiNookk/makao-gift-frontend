import { useEffect } from 'react';
import { loginFormStore } from '../stores/LoginFormStore.js';
import useForceUpdate from './useForceUpdate.js';

export default function useLoginFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    loginFormStore.subscribe(forceUpdate);

    return () => loginFormStore.unsubscribe(forceUpdate);
  });

  return loginFormStore;
}
