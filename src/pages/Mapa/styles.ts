
import styled from "styled-components/native";

/* .App {
  text-align: center;
}
.App > div {
  height: 400px;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

button {
  font-size: calc(10px + 2vmin);
} */

export const Header = styled.Text`
  color: #b6bbc4;
  font-size: 12vw;
  padding-left: 110px;
  padding-right: 110px;
  padding-top: 100px;
  text-align: center;
`;
export const Button = styled.TouchableOpacity`
  height: 65px;
  margin-top: 40px;
  background-color: #117bdf;
  width: 340px;
  border-radius: 12px;
  font-family: -apple-system white;
  margin-left: 35px;
`;
export const Input = styled.TextInput`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  color: #313d4f;
  background: #192737;
  border-color: #313d4f;
  border: 1px;
  border: solid;
  height: 75px;
  border-radius: 12px;
`;
export const Perfil = styled.Text`
  color: #ffffff;
  font-family: BlinkMacSystemFont;
  padding-top: 30px;
  padding-left: 117px;
  padding-bottom: 60px;
`;

export const Body = styled.View`
  height: 100%;
  background: #000810;
`;
export const ButtonText = styled.Text`
  padding-top: 10px;
  padding-left: 35%;
  font-size: 30px;
`;
export const ForgotPassword = styled.Text`
  color: #b6bbc4;
  padding-top: 30px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 25px;
  align-items: center;
  padding: 15px;
`;

export const Circulo = styled.Text`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: orange;
  margin-left:170px;
`;

export const Geb = styled.Text`
  position: absolute;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: orange;
  margin-left:290px;
  background-color: white;
  padding: 10px;
  display: inline-block;
  margin: 5px;
  hover {
  background-color: yellow;
}
`;
