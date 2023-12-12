import React, { useEffect, useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import {
    Block,
    BlockBetween,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
} from "../components/Component";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { kycData } from "../components/partials/KycData";
import UserDetails from "../components/partials/UserDetails";
import { useLocation } from "react-router-dom";

const User = () => {
    const [searchText, setSearchText] = useState("");
    const [userID, setUserID] = useState(null);
    const [user, setUser] = useState();
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const dispatch = useDispatch();


    useEffect(() => {
        // setUser(null)
        if (id || userID) {
            let spUser;
            if (id) {
                spUser = kycData.find((item) => item.id === id);
                setUser(spUser);
            }
            if (userID) {
                spUser = kycData.find((item) => item.id === userID);
                setUser(spUser);
            }

        } else {
            setUser(null);
        }
    }, [id, userID, kycData]);


    // onChange function for searching name
    const onSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    const handleSearch = () => {
        if (searchText !== "") {
            setUserID(searchText)
        }
    }

    // Change Page
    return (
        <React.Fragment>
            <Head title="Users" />
            <Content>
                <BlockHead size="lg">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle tag="h2" className="fw-normal ml-4 pl-2">
                                User
                            </BlockTitle>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>

                <div className="d-flex justify-content-center position-relative" style={{ height: `${user ? 'auto' : '400px'} `, top: `${user ? '-70px' : 'auto'} ` }}>
                    <ul className="nk-block-tools g-3">
                        <li>
                            <div className="form-control-wrap d-flex align-items-center">

                                <input
                                    type="text"
                                    className="form-control"
                                    id="default-04"
                                    placeholder="Search User ID"
                                    style={{ width: '400px' }}
                                    onChange={(e) => onSearchChange(e)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch();
                                        }
                                    }}
                                    defaultValue={userID ? userID : id}
                                />
                                <Button size="sm" color="secondary" style={{ right: '70px' }} onClick={handleSearch}>
                                    Search
                                </Button>
                            </div>
                        </li>

                    </ul>
                </div>

                <UserDetails user={user} />

                <Block>
                </Block>
            </Content>
        </React.Fragment>
    );
};
export default User;
