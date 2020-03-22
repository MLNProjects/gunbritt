import React, { useState, useEffect, useContext } from "react";
import { postUserInformation } from "./services";
import { Context } from "../../store/reducer";

const UserInformation = () => {
  const [distance, setDistance] = useState(0);
  const [radio, setRadio] = useState("hero");
  const [geoError, setGeoError] = useState(false);
  const [coordinates, setCoordinates] = useState<number[]>([]);
  const [state] = useContext(Context);

  const handleUserInformation = (e: any) => {
    const { name, phoneNumber, description } = e.target.values;

    if (
      name.value !== "" &&
      phoneNumber.value !== "" &&
      description.value !== "" &&
      !geoError &&
      state.userId &&
      state.idToken
    ) {
      postUserInformation(
        state.userId,
        state.idToken,
        name.value,
        phoneNumber.value,
        distance,
        description.value,
        coordinates,
        radio
      );
    }
  };

  const setLocation = (pos: any) => {
    setCoordinates([pos.coords.latitude, pos.coords.longitude]);
  };

  const setError = () => {
    setGeoError(true);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setGeoError(true);
      return;
    }
    geo.getCurrentPosition(setLocation, setError);
  }, []);

  console.log(coordinates);
  return (
    <div>
      <h1>Quarentine Helper</h1>
      <h4>Vi behöver lite mer information</h4>
      <div>
        <h4>Du är</h4>
        <div
          onChange={(e: any) => {
            setRadio(e.target.value);
          }}
        >
          <input type="radio" value="hero" name="heroOrMissionRadio" defaultChecked />
          <label htmlFor="hero-radio">redo att hjälpa</label>
          <input type="radio" value="mission" name="heroOrMissionRadio" />
          <label htmlFor="mission-radio">i behov av hjälp</label>
        </div>
      </div>
      <div>
        <form onSubmit={handleUserInformation}>
          <label>
            namn
            <input type="text" name="name" id="name-input" />
          </label>
          <label>
            telefonnummer
            <input type="text" name="phoneNumber" id="phone-number-input" />
          </label>
          <label>
            Beskrivning av tjanster du kan erbjuda
            <input type="text" name="description" id="description-input" />
          </label>
          {radio === "hero" ? (
            <label>
              Distans du ar redo att resa (km): {distance}
              <input
                onChange={(e: any) => {
                  setDistance(e.target.value);
                }}
                type="range"
                value={distance}
                min="0"
                max="10"
              />
            </label>
          ) : (
            ""
          )}
          <button type="submit">Forstätt</button>
        </form>
        {geoError ? <div>Du måste aktivera platstjänster för att kunna använda vår tjänst</div> : ""}
      </div>
    </div>
  );
};

export default UserInformation;
