import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { ButtonOne, NotFound, NotFoundSecond } from "./NotFoundStyle";

const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};

	return (
		<NotFound>
			<NotFoundSecond>
				<h1>Ошибка 404</h1>
				<p>
					Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
					существует. Возможно она
					<br />
					устарела, была удалена, или был введен неверной адрес в адресной
					строке.
				</p>
			</NotFoundSecond>
			<ButtonOne>
				<Button onClick={handleBack} variant="contained">
					Перейти на главную
				</Button>
			</ButtonOne>
		</NotFound>
	);
};

export default NotFoundPage;
