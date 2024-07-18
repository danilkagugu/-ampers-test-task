import CatalogList from "../../components/CatalogList/CatalogList";
import FilterItems from "../../components/FilterItems/FilterItems";
import Layout from "../../components/Layout/Layoutr";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <Layout>
      <div className={css.catalogContainer}>
        <FilterItems />
        <CatalogList />
      </div>
    </Layout>
  );
};

export default CatalogPage;
