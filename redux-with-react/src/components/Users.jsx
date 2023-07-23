import { useEffect } from "react";
import { fetchUsers } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";


const Users = () => {
    
    const users = useSelector((state) => state.user);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h1>User Emails</h1>
            <p>{users.loading && "Loading"}</p>
            <ul>
                {! users.loading && ! users.error && users.users.map((value) => <li> {value.email} </li>)}
            </ul>
            <p>{! users.loading && users.error}</p>
        </div>
    );
}

export default Users;