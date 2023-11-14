import { PropsWithChildren } from 'react';

export const ActionContainer = ({
  children,
  withDivider,
}: PropsWithChildren<{ withDivider?: boolean }>) => {
  return (
    <div
      className={`flex h-12 cursor-pointer items-center rounded-3xl border px-2 shadow transition-shadow hover:shadow-md ${
        withDivider ? 'divide-x' : ''
      }`}
    >
      {children}
    </div>
  );
};
