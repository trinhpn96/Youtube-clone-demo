import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="flex justify-center flex-row mx-3 my-6">
      <div className="justify-center items-center">
        <Header />
        <QueryClientProvider client={queryClient}>
          <Outlet className="justify-center" />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;
