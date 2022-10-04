import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from 'components/layout';
import TokenService from 'services/tokenService';
import styled from 'styled-components';
import MainBanner from 'pages/signInAndSignUp/components/MainBanner';
import MainLogin from 'pages/signInAndSignUp/components/LoginForm';
import SignModal from 'pages/signInAndSignUp/components/SignUpModal';

export default function signInAndSignUp() {
    // state
    const [modal, setModal] = useState<boolean>(false);

    // util
    const navigate = useNavigate();

    // token
    const auth = useRef<string | null>(TokenService.get(process.env.REACT_APP_TOEKN_KEY as string));

    // isExsist token redirect
    useEffect(() => {
        if (!auth.current) {
            return;
        } else {
            navigate('/todo', { replace: true });
        }
    }, [navigate]);

    // render
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
