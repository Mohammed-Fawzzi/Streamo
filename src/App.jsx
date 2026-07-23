import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/routes";
import Loading from "@/components/common/ui/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
