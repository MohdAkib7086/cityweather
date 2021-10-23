import React, { useEffect, useState } from "react";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=31365f1254fca3aa98c40276c2716af1`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            console.log(resJson.main);
        }

        fetchApi();

    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        placeholder="enter your city"
                        className="inputField"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                    <br />
                </div>
                {!city ? (
                    <p>no data found</p>
                ) : (
                    <div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>city:{search}
                        </h2>
                        <h1 className="temp" >
                            Temp: {city.temp}
                        </h1>

                        <h3 className="tempmin_max">
                           Max: {city.temp_min}  Min:{city.temp_max}
                        </h3>
                    </div>
                )}
            </div>
        </>
    );
};

export default Tempapp;