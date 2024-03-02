import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import photo2 from "../../../assets/trello.img/brand-trello.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrello } from "../../../redux/tools/trelloSlice";
import { BorderDiv, Content, LogoLogin, SecondBorder } from "./LoginStyle";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const LoginPage = () => {
	const dataUser = useAppSelector((state) => state.trelloReducer.data);
	const dispath = useAppDispatch();
	const [title, setTitle] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	// !
	const handleReady = async () => {
		if (title === "" || password === "") {
			alert("Заполнить пустые места");
		} else {
			const findUser = dataUser.find(
				(item) => item.title === title && item.password === password
			);

			if (findUser) {
				localStorage.setItem("isAuth", "" + findUser._id);
				console.log("Found", findUser);
				navigate("/user");
			} else {
				alert("Неверный логин или пароль");
			}
		}
	};

	useEffect(() => {
		dispath(getTrello());
	}, [dispath]);

	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<div className="container">
			<Content>
				<BorderDiv>
					<LogoLogin>
						<img src={photo2} alt="" />
						<h2>Trello</h2>
					</LogoLogin>
					<SecondBorder>
						<h3>Вход в Trello</h3>
						<TextField
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							id="outlined-basic"
							label="Укажите адрес электронной почты"
							variant="outlined"
						/>
						<TextField
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="outlined-basic"
							label="Введите пароль"
							variant="outlined"
						/>
						<Button onClick={handleReady} variant="contained">
							Продолжить
						</Button>
						<Button onClick={handleRegister} variant="contained">
							Зарегистрируйтесь
						</Button>
					</SecondBorder>
					<p>
						<a href="http://localhost:5173/">Выйти</a>
					</p>
				</BorderDiv>
			</Content>
		</div>
	);
};

export default LoginPage;
