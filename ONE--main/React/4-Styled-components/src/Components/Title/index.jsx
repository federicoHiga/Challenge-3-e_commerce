import styled from "styled-components"

const Title = styled.h1`
  color: ${ ({theme})=>theme.text };
  padding: 25px 0;
`

/**
 * Title: nose porq el styled components de arriba reemplaza el return de abajo, ose genera un h1 con su style pero como le llega la prop de "children" es decir el contenido del h1?
 */

// const Title = ({ children }) => {
//   return <h1 className="title">{children}</h1>;
// };

export default Title;
