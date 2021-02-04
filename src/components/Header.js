/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container } from "../components/Grid"
import  Cart  from "./Cart"

export default function Header() {
  return (
    <header sx={styles.header}>
      <Container
        sx={styles.container}
      >
        <Link to="/" sx={styles.mainLink}>
         MINI SHOP
        </Link>
        <Cart/>
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
  },
  container: {
    maxWidth: [
      "100%",
      "552px",
      "732px",
      "910px",
      "1100px",
      "1320px",
      "1480px",
    ],
    display: "flex",
    justifyContent: "space-between"
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    zIndex: 3,
  },
}
