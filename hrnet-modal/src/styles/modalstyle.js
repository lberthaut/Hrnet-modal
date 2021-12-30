import { createGlobalStyle } from "styled-components";

const Modalstyle = createGlobalStyle`
.overlay{
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: grey;
    opacity: 0.5;
    position: fixed;
}

.modal_container{
    z-index: 2;
    background-color: white;
    width: 35%;
    position: absolute;
    left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`

export default Modalstyle;