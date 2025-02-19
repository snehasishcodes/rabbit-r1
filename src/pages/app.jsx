import Sidebar from "./sidebar.jsx";
import Model from "./model.jsx";
import Rightbar from "./rightbar.jsx";

export default function Landing() {
	return (
		<div className="w-full h-screen flex flex-col lg:flex-row gap-4 justify-center items-center bg-main text-white p-4 overflow-hidden">
			<Sidebar />

			<div className="relative flex flex-col justify-center items-center h-[65%] lg:h-full w-full lg:w-[75%] bg-black rounded-[4rem]">
				<Model />
			</div>

			<Rightbar />
		</div>
	);
};



