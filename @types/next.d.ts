import 'next';

declare module 'next' {
  import { RootStore } from '../logic/root-store';
  import { Store } from 'redux';

  interface NextPageContext {
    asPath: string;
    store: Store<RootStore>;
  }
}