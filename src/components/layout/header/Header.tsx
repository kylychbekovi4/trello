import Button from "@mui/material/Button";
import photo1 from "../../../assets/trello.img/category.svg";
import photo2 from "../../../assets/trello.img/brand-trello.svg";
import photo3 from "../../../assets/trello.img/bell-minus.svg";
import photo4 from "../../../assets/trello.img/question-mark.svg";
import photo6 from "../../../assets/trello.img/chevron-down.svg";
import { ExitBtn, Header1, Logo, Logo2, Logo3, UserLogo } from "./HeaderStyle";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useState, useEffect } from "react";
import { getTrello } from "../../../redux/tools/trelloSlice";
import { useNavigate } from "react-router";

const Header = () => {
	const userItems = useAppSelector((state) => state.trelloReducer.data);
	const dispatch = useAppDispatch();
	const [userPhoto, setUserPhoto] = useState("");
	const navigate = useNavigate();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isAuth = +localStorage.getItem("isAuth")!;

	const usersPhoto = () => {
		const dataFind = userItems.find((item) => item._id === isAuth);
		console.log(dataFind);

		if (dataFind) {
			setUserPhoto(dataFind.userProfile);
		} else {
			console.log("error");
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLogout = () => {
		alert("Вы точно хотите выходить из аккаунта?");
		navigate("/login");
		localStorage.removeItem("isAuth");
	};

	useEffect(() => {
		usersPhoto();
	}, [userItems]);

	useEffect(() => {
		dispatch(getTrello());
	}, [dispatch]);

	return (
		<Header1>
			<Logo>
				<img src={photo1} alt="" />
				<img src={photo2} alt="" />
				<h3>Trello</h3>
				<Logo2>
					<p>Рабочие пространства</p>
					<img src={photo6} alt="" />
					<p>Недавние</p>
					<img src={photo6} alt="" />
					<p>В избранном</p>
					<img src={photo6} alt="" />
					<p>Шаблоны</p>
					<img src={photo6} alt="" />
					<Button variant="contained">Создать</Button>
				</Logo2>
			</Logo>
			<Logo3>
				<input placeholder="Поиск" type="text" />
				<img src={photo3} alt="" />
				<img src={photo4} alt="" />
				<UserLogo onClick={toggleMenu}>
					{isAuth ? (
						<>
							<img src={userPhoto} alt="" />
						</>
					) : null}
				</UserLogo>
				<ExitBtn>
					{isMenuOpen && <button onClick={handleLogout}>Exit</button>}
				</ExitBtn>
			</Logo3>
		</Header1>
	);
};

export default Header;
