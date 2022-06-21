import { ComponentType, Suspense } from 'react';

export function withSuspense<WCP>(WrappedComponent:ComponentType<WCP>) {
  return (props: WCP) => (
    <Suspense fallback={<div>...loading</div>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
}
