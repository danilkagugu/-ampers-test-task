import Layout from "../../components/Layout/Layoutr";
import FavoritesCatalog from "../../components/FavoritesCatalog/FavoritesCatalog";
import css from "./FavoritesPage.module.css"

const FavoritesPage = () => {
  return (
    <Layout>
      <h2 className={css.title}>Your favorites campers</h2>
      <FavoritesCatalog />
    </Layout>
  );
};

export default FavoritesPage;
