import React from "react";
import Preloader from "../widgets/preloader/preloader"

export const withSuspense = (Component: React.FC<any>) => {
  return (props: any) => {
    return <React.Suspense fallback={<Preloader/>}>
      <Component {...props} />
    </React.Suspense>
  };
};