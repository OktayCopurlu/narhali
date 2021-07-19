import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function CreateForm() {
  const URL = "https://halideneme-26fbb-default-rtdb.europe-west1.firebasedatabase.app/narhali.json"
  const classes = useStyles();
  const [sizes, setSizes] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });
  const [marka, setMarka] = useState();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [differentSize, setDifferentSize] = useState();
  const [eightyTo150, setEightyTo150] = useState();
  const [eightyTo300, setEightyTo300] = useState();
  const [hundertTo200, setHundertTo200] = useState();
  const [hundertTo300, setHundertTo300] = useState();
  const [smallCarpet, setSmallCarpet] = useState();
  const [fourMeter, setFourMetre] = useState();
  const [sixMeter, setSizMeter] = useState();
const [color,setColor]=useState()
  const body = {
    marka,
    title,
    info,
    differentSize,
    eightyTo150,
    eightyTo300,
    hundertTo200,
    hundertTo300,
    smallCarpet,
    fourMeter,
    sixMeter,
    color
  };

  function submit(event) {
    event.preventDefault();
    const OPT = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, OPT)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleChange = (event) => {
    setSizes({ ...sizes, [event.target.name]: event.target.checked });
  };
  useEffect(() => {
    setEightyTo150(sizes.checkedA ? "80 x 150" : undefined);
    setEightyTo300(sizes.checkedB ? "80 x 300" : undefined);
    setHundertTo200(sizes.checkedC ? "100 x 200" : undefined);
    setHundertTo300(sizes.checkedD ? "100 x 300" : undefined);
    setSmallCarpet(sizes.checkedE ? "120 x 180" : undefined);
    setFourMetre(sizes.checkedE ? "160 x 230" : undefined);
    setSizMeter(sizes.checkedG ? "200 x 290" : undefined);
  }, [
    sizes.checkedA,
    sizes.checkedB,
    sizes.checkedC,
    sizes.checkedD,
    sizes.checkedE,
    sizes.checkedG,
  ]);
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="w-50">
        <h1 className="d-flex justify-content-center">ÜRÜN OLUŞTURMA FORMU</h1>
        <div className="d-flex justify-content-center m-5">
          <form
            onSubmit={submit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              onChange={(event) => setMarka(event.target.value)}
              label="Marka / Model"
            />
            <TextField
              id="standard-basic"
              onChange={(event) => setTitle(event.target.value)}
              label="Baslik"
            />
            <TextField
              id="standard-basic"
              onChange={(event) => setInfo(event.target.value)}
              label="Aciklama"
            
            />
            <TextField
              id="standard-basic"
              onChange={(event) => setColor(event.target.value)}
              label="Color"
            />
            <TextField
              id="standard-basic"
              onChange={(event) => setDifferentSize(event.target.value)}
              label="Ölçüler"
            />
            <div className="d-flex justify-content-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="80 x 150"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="80 x 300"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                  />
                }
                label="100 x 200"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    color="primary"
                  />
                }
                label="100 x 300"
              />
            </div>
            <div className="d-flex justify-content-between">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedE}
                    onChange={handleChange}
                    name="checkedE"
                    color="primary"
                  />
                }
                label="120 x 180"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedF}
                    onChange={handleChange}
                    name="checkedF"
                    color="primary"
                  />
                }
                label="160 x 230"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sizes.checkedG}
                    onChange={handleChange}
                    name="checkedG"
                    color="primary"
                  />
                }
                label="200 x 290"
              />
            </div>
            <button className="btn btn-primary">Kaydet</button>
          </form>
        </div>
      </div>
    </div>
  );
}
