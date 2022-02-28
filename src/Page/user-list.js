import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Pagination from "react-js-pagination";

import './UserList.css';


function UserList(){

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ UserList, setUserList] = useState([]);
    const [ totalPage, setTotalPage] = useState(0);
    const [ perPage, setPerPage] = useState(0);

    useEffect(() => {
        const handleLoadUserList = () => {
            axios(`https://reqres.in/api/users?page=${currentPage}`, {})
            .then(res => {
                setUserList(res.data.data);
                setTotalPage(res.data.total);
                setPerPage(res.data.per_page);
            })
            .catch(err => {
                alert('Something went wrong with apis');
            })
        }
        handleLoadUserList();
    }, [currentPage]);

    return (
        <div>
            <h2>User List</h2>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {UserList.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td><img src={user.avatar} style={{height: '50px', width: '50px'}} alt="" /></td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
                onChange={page => {
                    setCurrentPage(page);
                }}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    )
}

export default <UserList/>