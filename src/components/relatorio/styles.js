import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    height: 95%;
    width: 60%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const FieldLine = styled.div`
    height: 60px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FieldCollumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 47%;
    height: 100%;
`;

export const Field = styled.div`
    height: 50%;
    width: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    :first-of-type {
        border-bottom: 0.5px;
    }
`;

export const ThreeFieldLine = styled.div`
    height: 60px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SecondField = styled.div`
    height: 50%;
    width: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    :first-of-type {
        border-bottom: 0.5px;
    }
`;

export const SecondFieldCollumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
`;

export const MainText = styled.span`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
`;

export const Text = styled.span`
    font-size: 0.9em;
    text-align: center;
`;

export const Image = styled.img`
    width: 95%;
    height: 70vh;
    object-fit: cover;
`;

export const FooterDiv = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
`;

export const FooterLogo = styled.img`
    width: 150px;
    height: auto;
    margin-top: -10px;
`;

export const IndicatorText = styled.span`
    font-size: 0.9em;
    text-align: center;
    padding-right: 20px;
`;