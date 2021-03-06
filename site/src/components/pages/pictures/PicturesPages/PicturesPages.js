import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

import "./PicturesPages.scss";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import { setSearchParams } from "../../../../actions/pictures-actions";

const PicturesPages = (props) => {
	const { pageNumber, pagesCount } = props;
	const dispatch = useDispatch();
	const setPageNumber = (pageNumber) => {
		dispatch(setSearchParams({ pageNumber }));
	};

	const buttonsElements = new Array(pagesCount).fill(1).map((e, index) => {
		return (
			<Button
				onClick={() =>
					index + 1 === pageNumber ? "" : setPageNumber(index + 1)
				}
				variant={index + 1 === pageNumber ? "contained" : ""}
				key={index}
			>
				{index + 1}
			</Button>
		);
	});

	return (
		<div className="pictures-pages">
			<ButtonGroup color="primary">{buttonsElements}</ButtonGroup>
		</div>
	);
};

const mapStateToProps = (state) => {
	const {
		pagesCount,
		searchParams: { pageNumber },
	} = state.pictures;
	return {
		pagesCount,
		pageNumber,
	};
};

export default compose(connect(mapStateToProps))(PicturesPages);
