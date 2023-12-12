import React, { useEffect, useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Badge, Card, Modal, ModalBody } from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  // Icon,
  Row,
  Col,
  UserAvatar,
} from "../Component";
import { currentTime, findUpper, monthNames, todaysDate } from "../../utils/Utils";
import { kycData } from "./KycData";
import { Link } from "react-router-dom";

const UserDetails = ({ user }) => {
  const [noteData, setNoteData] = useState([]);
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [addNoteText, setAddNoteText] = useState("");

  // delete a note
  const deleteNote = (id) => {
    let defaultNote = noteData;
    defaultNote = defaultNote.filter((item) => item.id !== id);
    setNoteData(defaultNote);
  };

  const submitNote = () => {
    let submitData = {
      id: Math.random(),
      text: addNoteText,
      date: `${monthNames[todaysDate.getMonth()]} ${todaysDate.getDate()}, ${todaysDate.getFullYear()}`,
      time: `${currentTime()}`,
      company: "Royal Treasure",
    };
    setNoteData([...noteData, submitData]);
    setAddNoteModal(false);
    setAddNoteText("");
  };

  return (
    <React.Fragment>
      <Head title="User Details"></Head>
      {user && (
        <Content>
          <BlockHead size="sm">
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle page>
                  KYCs / <strong className="text-primary small">{user.name}</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Application ID: <span className="text-base">KID000844</span>
                    </li>
                    <li>
                      Submitted At: <span className="text-base">{user.date}</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    {/* <Icon name="arrow-left"></Icon> */}
                    <span>Back</span>
                  </Button>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    {/* <Icon name="arrow-left"></Icon> */}
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <Row className="gy-5">
              <Col lg="5">
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Application Info</BlockTitle>
                    <p>Submission date, approve date, status etc.</p>
                  </BlockHeadContent>
                </BlockHead>
                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Submitted By</div>
                        <div className="data-value">{user.id}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Submitted At</div>
                        <div className="data-value">{user.date}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Status</div>
                        <div className="data-value d-flex justify-content-center align-items-center">
                          {/* <Badge
                            size="sm"
                            color={
                              user.status === "Approved"
                                ? "outline-success"
                                : user.status === "Pending"
                                  ? "outline-info"
                                  : user.status === "Rejected"
                                    ? "outline-danger"
                                    : "outline-dark"
                            }
                            className="badge-dim"
                          >
                            {user.status}
                          </Badge> */}
                          <span
                            className={`tb-status text-${user.status === "Approved" ? "success" : user.status === "Pending" ? "info" : user.status === "Rejected" ? "danger" : "secondary"
                              }`}
                          >
                            {user.status}
                          </span>
                          <div className="d-flex ml-2">
                            {user.status !== "Approved" &&
                              <Button size="sm" color="success" style={{ fontSize: '10px' }}>Approve</Button>}
                            {user.status !== "Rejected" &&
                              <Button size="sm" color="danger ml-1" style={{ fontSize: '10px' }}>Reject</Button>}
                          </div>
                        </div>

                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Last Checked</div>
                        <div className="data-value">
                          <div className="user-card">
                            <UserAvatar theme="orange-dim" text={findUpper(user.checked)}></UserAvatar>
                            <div className="user-info">
                              <span className="tb-lead">{user.checked}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Last Checked At</div>
                        <div className="data-value">{user.date}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <Block className="w-100">
                        <BlockHead size="sm">
                          <BlockBetween>
                            {/* <BlockTitle tag="h6">Comment</BlockTitle> */}
                            <div className="data-label">Comment</div>
                            <a
                              href="#addnote"
                              onClick={(ev) => {
                                ev.preventDefault();
                                setAddNoteModal(true);
                              }}
                              className="link link-sm text-left w-100"
                            >
                              + Add Comment
                            </a>
                          </BlockBetween>
                        </BlockHead>
                        <div className="bq-note">
                          {noteData.map((item) => (
                            <div className="bq-note-item" key={item.id}>
                              <div className="bq-note-text">
                                <p>{item.text}</p>
                              </div>
                              <div className="bq-note-meta">
                                <span className="bq-note-added">
                                  Added on <span className="date">{item.date}</span> at{" "}
                                  <span className="time">{item.time}</span>
                                </span>
                                <span className="bq-note-sep sep">|</span>
                                <span className="bq-note-by mr-1">
                                  By <span>{item.company}</span>
                                </span>
                                <a
                                  href="#deletenote"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    deleteNote(item.id);
                                  }}
                                  className="link-sm link-danger"
                                >
                                  Delete Comment
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Block>
                    </li>
                  </ul>

                </Card>
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Uploaded Documents</BlockTitle>
                    <p>Here is user uploaded documents.</p>
                  </BlockHeadContent>
                </BlockHead>

                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Document Type</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Front Side</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Back Side</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Proof/Selfie</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Col>

              <Col lg="7">
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Applicant Information</BlockTitle>
                    <p>Basic info, like name, phone, address, country etc.</p>
                  </BlockHeadContent>
                </BlockHead>
                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">First Name</div>
                        <div className="data-value">{user.name.split(" ")[0]}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Last Name</div>
                        <div className="data-value">{user.name.split(" ").pop()}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Email Address</div>
                        <div className="data-value">info@softnio.com</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Phone Number</div>
                        <div className="data-value text-soft">
                          <em>Not available</em>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Date of Birth</div>
                        <div className="data-value">28 Oct, 2015</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Country of Residence</div>
                        <div className="data-value">Kenya</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Full Address</div>
                        <div className="data-value">6516, Eldoret, Uasin Gishu, 30100</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Wallet Type</div>
                        <div className="data-value">Bitcoin</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Wallet Address</div>
                        <div className="data-value text-break">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Telegram</div>
                        <div className="data-value">
                          <span>@tokenlite</span>{" "}
                          <a href="https://t.me/tokenlite">
                            {/* <Icon name="telegram"></Icon> */}
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Block>
          <Modal
            isOpen={addNoteModal}
            toggle={() => setAddNoteModal(false)}
            className="modal-dialog-centered"
            size="lg"
          >
            <ModalBody>
              <a
                href="#cancel"
                onClick={(ev) => {
                  ev.preventDefault();
                  setAddNoteModal(false);
                  setAddNoteText("");
                }}
                className="close"
              >
                {/* <Icon name="cross-sm"></Icon> */}
              </a>
              <div className="p-2">
                <h5 className="title">Add Admin Comment</h5>
                <div className="mt-4 mb-4">
                  <textarea
                    defaultValue={addNoteText}
                    className="form-control no-resize"
                    onChange={(e) => setAddNoteText(e.target.value)}
                  />
                </div>
                <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                  <li>
                    <Button color="primary" size="md" type="submit" onClick={submitNote}>
                      Add Comment
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => setAddNoteModal(false)} className="link link-light">
                      Cancel
                    </Button>
                  </li>
                </ul>
              </div>
            </ModalBody>
          </Modal>
        </Content>
      )}
    </React.Fragment>
  );
};
export default UserDetails;
