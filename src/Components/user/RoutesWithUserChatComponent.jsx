import { Outlet } from "react-router-dom";
import UserChatComponent from "./Chat/UserChatComponent";

export default function RoutesWithUserChatComponent () {
    return <>
    <Outlet />
    <UserChatComponent />
    </>
}