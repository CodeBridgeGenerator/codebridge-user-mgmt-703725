import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserPage from "../components/UsersPage/UserPage";
import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import UserProfilesPage from "../components/UserProfilesPage/UserProfilesPage";
import SingleUserProfilesPage from "../components/UserProfilesPage/SingleUserProfilesPage";
import UserProfileProjectLayoutPage from "../components/UserProfilesPage/UserProfileProjectLayoutPage";
import RolesPage from "../components/RolesPage/RolesPage";
import SingleRolesPage from "../components/RolesPage/SingleRolesPage";
import RefPositionsPage from "../components/RefPositionsPage/RefPositionsPage";
import SingleRefPositionsPage from "../components/RefPositionsPage/SingleRefPositionsPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<UsersProjectLayoutPage />} />
                    <Route path="/users/:singleUsersId/single" exact element={<SingleUsersPage />} />
                    <Route path="/users/:singleUsersId/userProfiles" exact element={<UserProfilesProjectLayoutPage />} />
                    <Route path="/users/:singleUsersId/userProfiles/:singleUserProfilesId" exact element={<SingleUserProfilesPage />} />
                    <Route path="/roles" exact element={<RolesPage />} />
                    <Route path="/roles/:singleRolesId" exact element={<SingleRolesPage />} />
                    <Route path="/refPositions" exact element={<RefPositionsPage />} />
                    <Route path="/refPositions/:singleRefPositionsId" exact element={<SingleRefPositionsPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
