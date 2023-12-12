import React, { useState, useEffect } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { Card, Button, Modal, ModalBody, ModalHeader, FormGroup } from "reactstrap";
import moment from "moment";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Row,
  Col,
  PaginationComponent
} from "../components/Component";
import { kycData } from "../components/partials/KycData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Homepage = () => {
  const [timeFrame, setSelectedTimeFrame] = useState("1month");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState({ startDate: null, endDate: null })
  const [searchText, setSearchText] = useState("");
  const [userID, setUserID] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [data, setData] = useState(kycData);

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <Head title="User List" />
      <Content>

        <Card className="card-bordered card-stretch position-relative" style={{ top: 'auto' }}>
          <div className="card-inner-group">
            <div className="card-inner">
              <div className="card-title-group">
                <div className="card-title">
                  <h5 className="title">User List</h5>
                </div>

              </div>
            </div>
            <div className="card-inner p-o">
              <table className="table w-100 d-table table-hover table-responsive">
                <thead>
                  <tr className="tb-tnx-head">
                    <th className="tb-tnx-id">
                      <span className="">ID</span>
                    </th>
                    <th className="">
                      <span>User</span>
                    </th>
                    <th className="">
                      <span>Doc Type</span>
                    </th>
                    <th className="">
                      <span>Date</span>
                    </th>


                    <th className="">
                      <span className="">Status</span>
                    </th>



                  </tr>
                </thead>
                <tbody>
                  {currentItems?.length > 0
                    ? currentItems?.map((item) => {
                      return (
                        <tr key={item.id} className="">
                          <td className="tb-tnx font-weight-bold">
                            <Link to={`user?id=${item.id}`}>
                              <div className="text-truncate" style={{ maxWidth: '100px' }}>{item.id}</div>
                            </Link>
                          </td>
                          <td className="tb-tnx font-weight-bold">
                            <div>{item.name}</div>
                          </td>
                          <td className="tb-tnx font-weight-bold">
                            <div>{item.doc}</div>
                          </td>
                          <td className="">
                            <span className="date">
                              <div className="d-flex">
                                {" "}
                                <div>{moment(item?.date).format("DD/MM/YYYY")}</div>

                                <div className="ml-2">
                                  {" "}
                                  {moment(item?.date).format("HH:mm ")}
                                </div>
                              </div>
                            </span>
                          </td>

                          <td className="tb-info">
                            <span
                              className={`tb-status text-${item.status === "Approved" ? "success" : item.status === "Pending" ? "info" : item.status === "Rejected" ? "danger" : "secondary"
                                }`}
                            >
                              {item.status}
                            </span>
                          </td>



                        </tr>
                      );
                    })
                    : null}
                </tbody>
              </table>
            </div>
            <div className="card-inner">
              {currentItems?.length > 0 ? (
                <PaginationComponent
                  noDown
                  itemPerPage={itemPerPage}
                  totalItems={data?.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              ) : (
                <div className="text-center">
                  <span className="text-silent">No data found</span>
                </div>
              )}
            </div>
          </div>
        </Card>
      </Content >
    </React.Fragment >
  );
};

export default Homepage;
