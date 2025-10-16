import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout.jsx";

// Lazy-loaded pages (code-splitting)
const Home = lazy(() => import("./pages/Home.jsx"));
const Grade = lazy(() => import("./pages/Grade.jsx"));
const Subject = lazy(() => import("./pages/Subject.jsx"));
const Parents = lazy(() => import("./pages/Parents.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// Lazy-loaded games
const FindTheAnimal = lazy(() => import("./games/FindTheAnimal.jsx"));

export default function App() {
  return (
    <Routes>
      {/* Layout route keeps header/footer persistent */}
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <Home />
            </Suspense>
          }
        />

        {/* Grade routes */}
        <Route
          path="grade/:id"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <Grade />
            </Suspense>
          }
        />
        {/* Nested example: /grade/2nd/math */}
        <Route
          path="grade/:id/:subject"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <Subject />
            </Suspense>
          }
        />
        <Route
          path="grade/:id/:subject/find-animal"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <FindTheAnimal />
            </Suspense>
          }
        />

        {/* Parents info/trust page */}
        <Route
          path="parents"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <Parents />
            </Suspense>
          }
        />

        {/* Redirect examples (optional) */}
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading…</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
