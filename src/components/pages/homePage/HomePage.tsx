import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {
	Button1,
	Button2,
	FifthMain,
	FourthMain,
	Logo,
	MainDiv,
	MainThird,
	Parent,
	Search,
	SecondMain,
	Texts,
} from "./HomeStyle";
import photo1 from "../../../assets/trello.img/search.svg";

const HomePage = () => {
	const navigate = useNavigate();

	const handleEntrance = () => {
		navigate("/login");
	};
	return (
		<>
			<div className="container">
				{/* //! First Main (1) */}
				<MainDiv>
					<Logo>
						<img
							src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Atlassian.svg/2560px-Atlassian.svg.png"
							alt=""
						/>
						<p>
							<a href="">Products</a>
						</p>
						<p>
							<a href="">Solutions</a>
						</p>
						<p>
							<a href="">Resources</a>
						</p>
					</Logo>
					<Search>
						<img src={photo1} alt="" />
						<Button onClick={handleEntrance} variant="contained">
							Sign in
						</Button>
					</Search>
				</MainDiv>
				{/* //! Second Main (2) */}
				<SecondMain>
					<Parent>
						<img
							src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/2560px-Trello_logo.svg.png"
							alt=""
						/>
						<p>
							<a href="">Templates</a>
						</p>
						<p>
							<a href="">Guide</a>
						</p>
						<p>
							<a href="">Pricing</a>
						</p>
						<p>
							<a href="">Enterprice</a>
						</p>
					</Parent>
					<Button1>
						<Button variant="contained">Try it free</Button>
					</Button1>
				</SecondMain>
				{/* //! Third Main (3) */}
				<MainThird>
					<Texts>
						<h1>Bring the power of a visual perspective to</h1>
						<h1>your team</h1>
						<Button2>
							<Button variant="contained">Try it free</Button>
						</Button2>
					</Texts>
				</MainThird>
				{/* //! Fourth Main (4) */}
				<FourthMain>
					<div>
						<img
							src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:c8a7d967-232a-4ac0-8b63-d7566ec6d162/Trello%20Hero.png?cdnVersion=1461"
							alt=""
						/>
					</div>
				</FourthMain>
			</div>
			{/* //! Fifth Main (5) */}
			<FifthMain>
				<h1>Welcome to Trello Official Website </h1>
			</FifthMain>
		</>
	);
};

export default HomePage;
