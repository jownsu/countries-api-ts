import { useEffect } from "react";

const useDarkMode = () => {
	useEffect(() => {
		const dark_mode = localStorage.getItem("dark_mode");
		if(dark_mode === "true"){
			document.body.className = "dark";
		}
	}, []);

	const toggleDarkMode = () => {
		let dark_mode = localStorage.getItem("dark_mode");

		if(dark_mode === "true"){
			document.body.className = "a";
			localStorage.setItem("dark_mode", "false");
		} 
		else{
			document.body.className = "dark";
			localStorage.setItem("dark_mode", "true");
		}
	};

	return { toggleDarkMode };
};

export default useDarkMode;
