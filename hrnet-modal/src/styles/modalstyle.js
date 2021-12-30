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
    width: 45%;
    position: absolute;
    left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 5px;

}

.close_button{
    margin-left: 90%;
    margin-top: 2%;
}

h2{
    color: red;
}

.text{
    margin: 12%;
    font-size: 18px;
}
`

export default Modalstyle;