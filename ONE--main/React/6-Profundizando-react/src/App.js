import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import {Button} from "@mui/material";
import { CounterProvider, CounterContext } from "./Context";
import { useContext } from "react";

function App() {

  const counterData = useContext (CounterContext)

  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button onClick={()=>counterData.resta()}> - </Button>
          <Button onClick={()=>counterData.suma()}> + </Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
