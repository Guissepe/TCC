import styled from 'styled-components/native';

    export const Header = styled.Text `
    color: #b6bbc4;
    font-size: 50px;
    padding-left: 28%;
    padding-right: 110px;
    padding-top: 100px;
    ` ;
    export const Button = styled.TouchableOpacity`


    height: 65px;
    margin-top: 40px;
    background-color: #117bdf;
    width: 75%;
    border-radius: 12px;
    font-family: -apple-system white;
    margin-left: 12%;

    `;
    export const Check = styled.TextInput`
    :checked{

    }
    background-color: #313d4f;
    `
    export const Input = styled.TextInput`
    ::placeholder {
      color: red;
    }
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
    export const LogInfo = styled.Text`
     color: #313d4f;
    font-family: BlinkMacSystemFont;
    padding-top: 30px;
    padding-left: 32%;
    padding-bottom: 60px;
 `;
    export const Body = styled.View`
    height: 100%;
    background: #000810;
    `;
    export const ButtonText = styled.Text`
    padding-top:10px;
    padding-left:35%;
    font-size: 30px;
    `;


