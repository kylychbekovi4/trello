import styled from "styled-components";

export const MainDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	background: #f4f5f7;
	border: none;
	border-radius: 5px;
`;

export const Logo = styled.div`
	display: flex;
	gap: 30px;
	align-items: center;

	p {
		a {
			color: blue;
		}
	}

	img {
		width: 100%;
		max-width: 200px;
		height: auto;
	}
`;

export const Search = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
// ! 2
export const SecondMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 60px;
	background: #ffff;
	border-radius: 5px;
`;

export const Parent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	img {
		width: 100%;
		max-width: 150px;
		height: auto;
	}

	p {
		a {
			color: blue;
		}
	}
`;

export const Button1 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// ! 3
export const MainThird = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const Texts = styled.div`
	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffff;
		font-size: 50px;
	}
`;

export const Button2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`;

// ! 4
export const FourthMain = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		position: relative;
		top: 37px;
	}
`;

// ! 5

export const FifthMain = styled.div`
	width: 100%;
	height: 400px;
	background: #0052cc;

	h1 {
		font-family: "Inter", sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 150px;
		font-size: 100px;
		color: #ffff;
	}
`;
