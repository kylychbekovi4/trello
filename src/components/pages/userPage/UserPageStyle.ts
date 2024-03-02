import styled from "styled-components";

export const Parent = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 50px;
	margin-top: 50px;
`;

export const AddButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	img {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 15px;
		cursor: pointer;
	}

	button {
		padding: 10px 20px;
		background: #ffffff3d;
		border: none;
		cursor: pointer;
		border-radius: 12px;
		margin-top: 20px;

		&:hover {
			background: gray;
		}
	}
`;

export const PlusButton = styled.div`
	button {
		padding: 10px 20px;
		background: #ffffff3d;
		border: none;
		cursor: pointer;
		border-radius: 12px;

		color: black;
		font-size: 15px;

		&:hover {
			background: gray;
			color: black;
		}
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const PlusInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	input {
		padding: 10px 40px;
		background: #22272b;
		border: none;
		border-radius: 9px;
		color: white !important;
		margin-top: 2px;
	}
`;

export const Inputs = styled.div`
	margin-top: 20px;
	textarea {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 25px;
		border: none;
		background: #22272b;
		border-radius: 12px;

		color: #ffff;
	}

	button {
		padding: 10px 20px;
		background: red;
		border: none;
		cursor: pointer;
		border-radius: 12px;
		position: relative;
		left: 170px;
		top: 55px;
	}
`;

export const Cards = styled.div`
	border: 1px solid white;
	padding: 40px;
	background: #122113;
	box-shadow: 0 0 10px #fff;
	color: white !important;
	border: none;
	border-radius: 20px;
`;

export const Text = styled.div`
	border: 1px solid white;
	padding: 5px 20px;
	width: 200px;
	background: #ffffff3d;
	margin-block: 10px;
	border-radius: 10px;
	border: none;
	color: white;
`;

export const TitleText = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;

	h3 {
		color: #6c856e;
	}
`;

export const RedactBtn = styled.div`
	button {
		padding: 5px 10px;
		background: #ffffff3d;
		border: none;
		cursor: pointer;
		border-radius: 9px;
		position: relative;
		left: 135px;

		&:hover {
			background: gray;
		}
	}
`;

export const PossessSave = styled.div`
	input {
		padding: 10px 5px;
		background: #22272b;
		border: none;
		border-radius: 9px;
		color: white !important;
		margin-top: 20px;
	}

	button {
		padding: 5px 10px;
		background: #ffffff3d;
		border: none;
		cursor: pointer;
		border-radius: 9px;
		position: relative;
		left: 20px;
	}
`;
