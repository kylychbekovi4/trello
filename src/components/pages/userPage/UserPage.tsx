/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Header from "../../layout/header/Header";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
	deleteTrello,
	getTrelloCards,
	patchTrello,
	postTrelloCards,
	putTrello,
} from "../../../redux/tools/trelloCardsSlice";
import {
	AddButton,
	Cards,
	Inputs,
	Parent,
	PlusButton,
	PlusInput,
	PossessSave,
	RedactBtn,
	Text,
	TitleText,
} from "./UserPageStyle";
import DeletePhoto from "../../../assets/trello.img/trash.svg";
import { TrelloCards } from "../../../types";

const UserPage = () => {
	const [cardText, setCardText] = useState("");
	const [testing, setTesting] = useState(false);
	const [title, setTitle] = useState("");
	const [addCard, setAddCard] = useState<number | null>(null);

	const [edit, setEdit] = useState<null | number>(null);
	const [control, setControl] = useState("");

	


	const card = useAppSelector((state) => state.trelloCards.card);
	const dispatch = useAppDispatch();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
	const handleAppend = (e: any) => {
		if (e.key === "Enter") {
			setTesting(false);
			const newTrello = {
				name: cardText,
				values: [],
			};
			dispatch(postTrelloCards(newTrello));
			setCardText("");
		}
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
	const pathReq = (e: any, name: string, _id: number, item: any) => {
		if (e.key === "Enter") {
			const newObject: TrelloCards = {
				name,
				values: [
					...item.values,
					{
						title: title,
						_id: Math.random(),
					},
				],
			};
			dispatch(patchTrello({ newObject, _id }));
			setAddCard(null);
			setTitle("");
		}
	};

	// ! edit
	const checkEdit = (value: any) => {
		setControl(value.title);
		setEdit(value._id);
	};

	useEffect(() => {
		dispatch(getTrelloCards());
	}, [dispatch]);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleEdit = (
		_id: number,
		title: string,
		values: any[],
		value_id: number
	) => {
		const updatedValues = values.map((value) => {
			if (value._id === value_id) {
				return { ...value, title: control };
			}
			return value;
		});

		const newObject: TrelloCards = {
			name: title,
			values: updatedValues,
		};

		dispatch(putTrello({ newObject, _id }));
		setEdit(null);
		setControl("");
	};

	// ! delete
	const handleDelete = (id: number) => {
		dispatch(deleteTrello(id));
	};

	return (
		<div>
			<Header />
			<Parent>
				{card.map((item) => (
					<div>
						<Cards>
							<div key={item._id}>
								<TitleText>
									<h3>title: {item.name}</h3>
								</TitleText>
								{item.values.map((value) => (
									<div key={item._id}>
										{edit === value._id ? (
											<PossessSave>
												<>
													<input
														type="text"
														value={control}
														onChange={(e) => setControl(e.target.value)}
													/>
													<button
														onClick={() =>
															handleEdit(
																item._id!,
																item.name,
																item.values,
																value._id
															)
														}>
														Possess
													</button>
												</>
											</PossessSave>
										) : (
											<>
												<Text>
													<p>{value.title}</p>
												</Text>
												<RedactBtn>
													<button
														onClick={() => {
															checkEdit(value), setEdit(value._id);
														}}>
														Redact
													</button>
												</RedactBtn>
											</>
										)}
									</div>
								))}
								{addCard === item._id ? (
									<>
										<Inputs>
											<textarea
												placeholder="Ввести заголовок для этой карточки "
												value={title}
												onChange={(e) => setTitle(e.target.value)}
												onKeyDown={(e) =>
													pathReq(e, item.name, item._id!, item)
												}></textarea>
											<button onClick={() => setAddCard(null)}>x</button>
										</Inputs>
									</>
								) : null}
								<AddButton>
									<button
										onClick={() => {
											setAddCard(item._id!);
										}}>
										Добавить карточку
									</button>
									<img
										onClick={() => handleDelete(item._id!)}
										src={DeletePhoto}
										alt=""
									/>
								</AddButton>
							</div>
						</Cards>
					</div>
				))}

				<PlusButton>
					<button onClick={() => setTesting(!testing)}>
						{" "}
						+ Добавить еще одну калонку
					</button>
					{testing ? (
						<PlusInput>
							<input
								placeholder="Ввести заголовок списка"
								type="text"
								value={cardText}
								onKeyDown={(e) => {
									handleAppend(e);
								}}
								onChange={(e) => setCardText(e.target.value)}
							/>
						</PlusInput>
					) : null}
				</PlusButton>
			</Parent>
		</div>
	);
};
export default UserPage;
