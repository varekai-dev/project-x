import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
	return (
		<Fragment>
			<div className="content__wrapper">
				<Header />
				<content className="content"> {props.children}</content>
			</div>

			<Footer />
		</Fragment>
	);
}

export default Layout;
