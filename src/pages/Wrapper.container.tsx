import { FC, lazy } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './Home.container';

import { withSuspense } from '../HoC/withSuspence';

const ErrorPage = lazy(() => import('./Error.container'));

const SuspendedErrorPage = withSuspense(ErrorPage);

export enum URL {
  HOME = '/',
}

const WrapperContainer:FC = (): JSX.Element => (
  <Routes>
    <Route path={URL.HOME} element={<HomePage />} />
    <Route path="*" element={<SuspendedErrorPage />} />
  </Routes>
);

export default WrapperContainer;
