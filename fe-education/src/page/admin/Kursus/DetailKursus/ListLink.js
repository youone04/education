import React, { memo, useEffect, useState } from "react";

function ListLink(props) {
  const[batcData , setBatchData] = useState(props.detailKursus.batch[props.detailKursus.batch.length-1].id)
  const handlebatch = (bc) => {
    setBatchData(bc)
  };

  useEffect(() => {
    setBatchData(props.detailKursus.batch[props.detailKursus.batch.length-1].id)
  },[props.detailKursus.batch[props.detailKursus.batch.length-1].id])

  return (
    <>
      <h5 className="mt-5 text-muted">List Link</h5>
      <div className="col-12">
        {props.detailKursus.batch.map((bc, i) => {
          return (
            <button
              key={i}
              onClick={() => handlebatch(bc.id)}
              type="button"
              className={`col-2 btn btn-block ${bc.id === batcData ? 'bg-white': 'bg-gradient-info'} btn-sm m-1`}
            >
              {bc.batchColum}
            </button>
          );
        })}
      </div>

      <ul
        className="list-unstyled custome-scroll"
        style={{ overflow: "auto", height: 300 }}
      >
        {props.detailKursus.link.filter(d => d.batchId === batcData).map((lk, i) => {
          return (
            <li key={i}>
              <a
                href={lk.link}
                target="_blank"
                className="btn-link text-secondary text-decoration-none"
              >
                <i className="far fa-fw fa-file-word" /> {lk.judul}
              </a>
              <p>{lk.keterangan}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default memo(ListLink);
