import styled from "styled-components";

export const LogoLogin = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h2 {
		font-size: 50px;
		color: hsl(240, 96.96969696969698%, 12.941176470588234%);
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BorderDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 120px;

	background: #ffffff83;
	width: 500px;
	height: 650px;
	border-radius: 10px;
`;

export const SecondBorder = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 350px;
	height: 450px;
	background: white;
	gap: 30px;
	border-radius: 10px;

	h3 {
		color: hsl(240, 96.96969696969698%, 12.941176470588234%);
	}
`;
