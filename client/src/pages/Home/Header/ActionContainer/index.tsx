import { PropsWithChildren } from 'react';

export const ActionContainer = ({
  children,
  withDivider,
}: PropsWithChildren<{ withDivider?: boolean }>) => {
  return (
    <div
      className={`flex items-center border px-2 rounded-3xl h-12 shadow hover:shadow-md transition-shadow cursor-pointer ${
        withDivider ? 'divide-x' : ''
      }`}
    >
      {children}
    </div>
  );
};
