import { useState } from 'react';
import MainLayout from 'components/layout';
import styled from 'styled-components';
import MainBanner from 'pages/signInAndSignUp/components/MainBanner';
import MainLogin from 'pages/signInAndSignUp/components/LoginForm';
import SignModal from 'pages/signInAndSignUp/components/SignUpModal';

export default function SignInAndSignUp() {
    // state
    const [modal, setModal] = useState<boolean>(false);

    return (
        <>
            {modal && <SignModal setModal={setModal} />}
            <MainLayout setModal={setModal}>
                <MainPageInner>
                    <MainBanner />
                    <MainLogin />
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
