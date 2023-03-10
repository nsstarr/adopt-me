import { createRoot } from 'react-dom/client'
import { useState, lazy, Suspense } from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import { Pet } from "./APIResponsesTypes";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams.js"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPetHook = useState(null as Pet | null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperC.jpg)",
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🌀</h2>
              </div>
            }
          >
            <AdoptedPetContext.Provider value={adoptedPetHook}>
              <header >
                <Link
                  to="/"
                >
                  Adopt Me!
                </Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </AdoptedPetContext.Provider>
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");

if (!container){
  throw new Error("no container to render to")
}
const root = createRoot(container);
root.render(<App />);

export default App;
