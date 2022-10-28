import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { getDetailKursus } from "../../../../redux/actions/actionDetailKursus/actionDetailKursus";
function FormAddLink(props) {
  const dispatch = useDispatch();
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async(data) => {
    try{
      const dataSend = {
        ...data,
        kursuId: props.data.id
      }
  
      const link = await axios.post(`${process.env.REACT_APP_END_POINT}/link`, dataSend)
      if(link.status === 200) {
        swal('success',link.data.message , "success");
        dispatch(getDetailKursus(token, props.data.id));
      }
    }catch(error){
      swal("error", error.response && error.response.data.message
      ? error.response.data.message
      : error.message, "error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="quickForm">
      <div className="card-body">
        <div className="form-group">
          <label>Judul:</label>
          <div
            className="input-group date"
            id="reservationdate"
            data-target-input="nearest"
          >
            <input
              type="text"
              className="form-control datetimepicker-input"
              data-target="#reservationdate"
              {...register("judul")}
            />
            <div
              className="input-group-append"
              data-target="#reservationdate"
              data-toggle="datetimepicker"
            >
              <div className="input-group-text">
                <i className="fa fa-title" />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Keterangan:</label>
          <div
            className="input-group date"
            id="reservationdate"
            data-target-input="nearest"
          >
            <input
              type="text"
              className="form-control datetimepicker-input"
              data-target="#reservationdate"
              {...register("keterangan")}
            />
            <div
              className="input-group-append"
              data-target="#reservationdate"
              data-toggle="datetimepicker"
            >
              <div className="input-group-text">
                <i className="fa fa-se" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Link:</label>
          <div
            className="input-group date"
            id="reservationdate"
            data-target-input="nearest"
          >
            <input
              type="text"
              className="form-control datetimepicker-input"
              data-target="#reservationdate"
              {...register("link")}
            />
            <div
              className="input-group-append"
              data-target="#reservationdate"
              data-toggle="datetimepicker"
            >
              <div className="input-group-text">
                <i className="fa fa-calendars" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Batch:</label>
          <div
            className="input-group date"
            id="reservationdate"
            data-target-input="nearest"
          >
            <input
              type="text"
              className="form-control datetimepicker-input"
              data-target="#reservationdate"
              value={props.data.batch[props.data.batch.length-1].batchColum}
              disabled
            />
            <div
              className="input-group-append"
              data-target="#reservationdate"
              data-toggle="datetimepicker"
            >
              <div className="input-group-text">
                <i className="fa fa-calendars" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">SIMPAN</button>
        </div>
      </div>
    </form>
  );
}

export default FormAddLink;
