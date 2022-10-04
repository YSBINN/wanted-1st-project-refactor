import { useState } from 'react';
import MainLayout from 'components/layout';
import MainBanner from 'pages/signInAndSignUp/components/MainBanner';
import LoginForm from 'pages/signInAndSignUp/components/LoginForm';
import SignModal from 'pages/signInAndSignUp/components/SignUpModal';
import styled from 'styled-components';

export default function SignInAndSignUp() {
    // state
    const [modal, setModal] = useState<boolean>(false);

    return (
        <>
            {modal && <SignModal setModal={setModal} />}
            <MainLayout setModal={setModal}>
                <MainPageInner>
                    <MainBanner />
                    <LoginForm />
                </MainPageInner>
            </MainLayout>
        </>
    );
}

const MainPageInner = styled.div`
    width: 100%;
    min-width: 480px;
    height: calc(100vh - 4rem);
    display: flex;
`;
