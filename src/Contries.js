import React from "react";
import { useState, useEffect } from "react";

function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);
    return (
        <div>
            <h2>Ýurtlaryň sanawy</h2>
            <ul>
                {countries.slice(0, 60).map((c) => (
                    <li key={c.tpyok}>
                        {c.name.common} - <img src={c.flags.svg} alt="" width={30} />
                    </li>
                ))}
            </ul>
        </div>
    )}
export default Countries;