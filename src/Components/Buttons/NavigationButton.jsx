import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet, Link, json, useParams, useNavigate } from "react-router-dom";

function NavigationButton({ pageNumber, setPageNumber}) {


    console.log("!!!!!NavigationButton!!!!!!");
    return (
        showButtons()
    )

    function showButtons() {
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" onClick={() => firstClicked()}>First</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => prevClicked(pageNumber)}>Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link">{pageNumber}</a></li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => nextClicked(pageNumber)}>Next</a>
                    </li>
                </ul>
            </nav>
        )

    }



    function prevClicked(pageNumber) {
        console.log("clicked");
        if (pageNumber <= 0) {
            pageNumber = 0;
        } else {
            setPageNumber(pageNumber - 1)
        }
    }

    function nextClicked(pageNumber) {
        console.log("clicked");
        setPageNumber(pageNumber + 1)

    }

    function firstClicked() {
        console.log("clicked");
        setPageNumber(0)
    }
};
export default NavigationButton;