import Container from "../Container/Container";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderMenu />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
