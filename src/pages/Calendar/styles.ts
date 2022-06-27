import styled from 'styled-components';
import {
    Container as ContainerNative,
    Paragraph as ParagraphNative,
} from './styles.native';

export const Container = ContainerNative;

export const Paragraph = ParagraphNative;

export const TextInput = styled.input`
    width: 90%;
    font-size: 30px;
    background-color: #333;
    border-radius: 15px;
    padding: 10px;
    color: white;
    margin-top: 10px;
`;
