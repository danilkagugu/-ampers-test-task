import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const Contacts = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const Favorites = lazy(() => import("../../pages/FavoritesPage/FavoritesPage"));
function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
