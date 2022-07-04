import UserService from "./user.services"

export const UserAdapter = () => {

    const getUserInfo = async () => {
        const resp = await UserService.getInstance().getUserInfo();

        console.log(resp);

        return resp.data;
    }

    return {
        getUserInfo
    }

}
