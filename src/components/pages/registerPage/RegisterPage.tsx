import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import photo2 from "../../../assets/trello.img/brand-trello.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { postTrello } from "../../../redux/tools/trelloSlice";
import {
	BorderDiv,
	Content,
	LogoLogin,
	SecondBorder,
} from "../loginPage/LoginStyle";

const RegisterPage = () => {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState("");
	const [password, setPassword] = useState("");
	const [userProfile, setUserProfile] = useState("");
	const navigate = useNavigate();

	const handleEnd = () => {
		if (title === "" || password === "" || userProfile === "") {
			alert("Заполните пустые место");
		} else {
			const newTrello = {
				title: title,
				password: password,
				userProfile: userProfile,
			};
			dispatch(postTrello(newTrello));
			navigate("/login");
		}
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
						<h3>Регистрация в Trello</h3>
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
						<TextField
							type="link"
							value={userProfile}
							onChange={(e) => setUserProfile(e.target.value)}
							id="outlined-basic"
							label="Изображение"
							variant="outlined"
						/>
						<Button onClick={handleEnd} variant="contained">
							Завершить
						</Button>
						<p>
							<a href="http://localhost:5173/login">Уже есть аккаунт!</a>
						</p>
					</SecondBorder>
				</BorderDiv>
			</Content>
		</div>
	);
};

export default RegisterPage;
