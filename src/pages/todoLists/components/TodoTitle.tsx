import styled from 'styled-components';
import { StyleProps } from 'types/style/style.types';

export default function TodoTItle(): JSX.Element {
    // render
    return <TodoTitleTemp>TO DO LIST</TodoTitleTemp>;
}

// style
const TodoTitleTemp = styled.div<StyleProps>`
    width: 100%;
    text-align: center;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${props => props.theme.mainColor};
    font-weight: bold;
`;
