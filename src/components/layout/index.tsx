import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

// type
interface MainLayoutProps {
    children: React.ReactNode;
    setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

// fc
export default function MainLayout({ setModal }: MainLayoutProps): JSX.Element {
    // render
    return (
        <Container>
            <Header>
                <div>WANTED</div>
                <p>
                    <>
                        계정이 없으 신가요?
                        <span onClick={() => setModal && setModal(true)}>회원가입</span>
                    </>
                </p>
            </Header>
            <Outlet />
        </Container>
    );
}

// style
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const Header = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    border-bottom: 1px solid #ebe4f9;

    & > div {
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
    }

    & > p {
        font-size: 10px;

        & > span {
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;
