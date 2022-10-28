import React, { Component } from "react";
import QRCode from "react-qr-code";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save(`sertifikat.pdf`);
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div
          id="divToPrint"
          className="mt4"
          style={{
            backgroundColor: "#f5f5f5",
            width: "210mm",
            minHeight: "297mm",
            marginLeft: "auto",
            marginRight: "auto",
            // visibility:'hidden'
          }}
        >
          <div style={{ paddingTop: "16rem",transform:'rotate(90deg)',marginLeft: '16rem' }}>
            <div
              className="container pm-certificate-container"
              style={{
                // transform:'rotate(90deg)',
                width: "210mm",
                minHeight: "135mm",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div className="outer-border" />
              <div className="inner-border" />
              <div className="pm-certificate-border col-xs-12">
                <div className="row pm-certificate-header">
                  <div className="pm-certificate-title cursive col-xs-12 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="col-2">
                        {/* <QRCode value="hey" size={40} /> */}
                      </div>
                      <h2 className="col-8">Education IDN</h2>
                      <div className="col-2">
                        {
                          this.props?.data?
                          <QRCode value={`${process.env.REACT_APP_CLIENT}/srtf/${this.props.userId}/${this.props.id}`} size={60} />
                          :''
                        }

                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pm-certificate-body">
                  <div className="pm-certificate-block">
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                        <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                          <span className="pm-name-text bold">
                          {this.props?.data?this.props?.data?.user?.name:'No Data'}
                          </span>
                        </div>
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                        <div className="pm-earned col-xs-8 text-center">
                          <span className="pm-earned-text padding-0 block cursive">
                            No Sertifikat
                          </span>
                          <span className="pm-credits-text block bold sans">
                            EI : 0283434
                          </span>
                        </div>
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                        <div className="col-xs-12" />
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                        <div className="pm-course-title col-xs-8 text-center">
                          <span className="pm-earned-text block cursive">
                            Telah menyelesaikan kursus
                          </span>
                        </div>
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                        <div className="pm-course-title underline col-xs-8 text-center">
                          <span className="pm-credits-text block bold sans">
                            {this.props?.data?this.props?.data?.kursus?.judul:'No Data'}
                          </span>
                        </div>
                        <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="pm-certificate-footer">
                        <div className="col-xs-4 pm-certified col-xs-4 text-center">
                          <span className="pm-credits-text block sans">
                            Gaurav City School District
                          </span>
                          <span className="pm-empty-space block underline" />
                          <span className="bold block">
                            Crystal Benton Instructional Specialist II, Staff
                            Development
                          </span>
                        </div>
                        <div className="col-xs-4">{/* LEAVE EMPTY */}</div>
                        <div className="col-xs-4 pm-certified col-xs-4 text-center">
                          <span className="pm-credits-text block sans">
                            Date Completed
                          </span>
                          <span className="pm-empty-space block underline" />
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
