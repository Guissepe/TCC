import styled from 'styled-components/native';

    export const Header = styled.Text `
    color: #b6bbc4;
    font-size: 12vw;
    padding-left: 28%;
    padding-right: 25%;
    padding-top: 15%;
    ` ;
    export const Button = styled.TouchableOpacity`
    font-size: 16vw;
    height: 16vw;
    margin-top: 8vw;
    background-color: #117bdf;
    width: 75vw;
    border-radius: 12px;
    font-family: -apple-system white;
    margin-left: 13vw;
    `;

    export const InputEmail = styled.TextInput`
    ::placeholder {
      color: red;

    } 
    font-size: 12pw;
    padding: 2vw;
    margin: 2vw;
    color: #313d4f;
    background: #192737;
    border-color: #313d4f;
    border: 1px;
    border: solid;
    height: 20vw;
    border-radius: 12px;
    `;
      export const InputPassword = styled.TextInput`
      ::placeholder {
        color: red;
      }
      font-size: 12pw;
      padding: 2vw;
      margin: 2vw;
      color: #313d4f;
      background: #192737;
      border-color: #313d4f;
      border: 1px;
      border: solid;
      height: 20vw;
      border-radius: 12px;
      `;
      export const InputName = styled.TextInput`
      ::placeholder {
        color: red;
      }
      font-size: 12pw;
      padding: 2vw;
      margin: 2vw;
      color: #313d4f;
      background: #192737;
      border-color: #313d4f;
      border: 1px;
      border: solid;
      height: 20vw;
      border-radius: 12px;
      `;
    export const LogInfo = styled.Text`
     color: #313d4f;
    font-family: BlinkMacSystemFont;
    padding-top: 30px;
    padding-left: 20%;
    padding-bottom: 60px;
    font-size: 150%;
 `;
    export const Body = styled.View`
    background: #000810;
    flex: 1;
    height: 100%;
    width: 100%;

    `;
    export const ButtonText = styled.Text`
    padding-top:10px;
    padding-left:35%;
    font-size: 30px;
    `;
