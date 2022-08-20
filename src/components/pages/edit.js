import { Button } from "react-bootstrap";
import React, {useState,createRef}from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../text"; 
import { exportComponentAsJPEG } from 'react-component-export-image';
import Card from 'react-bootstrap/Card';

function EditPage() {
const addText =()=> {
    setCount(count + 1)
}
  const [params] = useSearchParams();
 const [count, setCount] = useState(0)
 const memeRef = createRef();
  return (
   
    <div>
      <Card style={{justifyContent:"center" }}>
      <div style={{ border:"1px solid black"}} ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="250px" />
        {
            Array(count).fill(0).map(e => <Text/>)
        }
      </div>
    </Card>
    <Button onClick={addText} >Add Text</Button>
    <Button variant="success" onClick={(e)=>exportComponentAsJPEG(memeRef)}>Save</Button>

    </div>
  );
}

export default EditPage;
