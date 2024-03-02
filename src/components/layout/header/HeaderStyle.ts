import styled from "styled-components";

export const Header1 = styled.div`
	background: #1d2125;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	color: #8b98a6;
	font-family: "Inter", sans-serif !important;
`;

export const Logo = styled.div`
	display: flex;
	gap: 5px;
	padding-left: 10px;
	align-items: center;
`;

export const Logo2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	position: relative;
	left: 50px;
`;

export const Logo3 = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	right: 20px;
	gap: 5px;

	input {
		background: #22272b;
		border: none;
		padding: 8px 10px;
		border-radius: 5px;
	}
`;

export const UserLogo = styled.div`
	img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 35px;
		height: auto;
		border-radius: 50px;
	}
`;

export const ExitBtn = styled.div`
	button {
		position: absolute;
		top: 48px;
		right: 2px;
		padding: 5px 10px;
		background: #ffffff3d;
		border: none;
		cursor: pointer;
		border-radius: 9px;
	}
`;

