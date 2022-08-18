import React, { useEffect } from "react";
import Export from "./Print";
import {useDispatch , useSelector} from "react-redux";
import { getSertifikat } from "../../../redux/actions/actionSertifikat/actionSertifikat";
import { useParams } from "react-router-dom";

function Sertifikat() {
  const {userId ,id} = useParams();

  const dispatch = useDispatch();
  const dataSertfikat = useSelector((state) => state.dataSertifikat);
  const {data , loading , error} = dataSertfikat.sertifikat

  useEffect(() => {
    dispatch(getSertifikat(userId,id));
  },[dispatch])


  return (
    <>
    {
      loading? <p>Loading ...</p>:
      error?<p>{error}</p>:
      <>
       <Export  data={data} userId={userId} id={id}/>
      </>
    }
   
    </>
  );
}

export default Sertifikat;
