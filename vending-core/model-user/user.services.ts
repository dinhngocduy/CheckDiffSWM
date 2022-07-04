import axios from 'axios';
import asyncStorageHelpers, { StorageKey } from '../common/helpers/async-storage-helpers';

const UserService = (() => {

    let instance: any;

    function init() {
        return {
            getUserInfo: () => {
                const fetch = async () => {
                    const accessToken = await asyncStorageHelpers.get(StorageKey.ACCESS_TOKEN);
                    const resp = axios({
                        method: "POST",
                        url: "https://keycloak.hyperlogy.com/auth/realms/smart-vending-machine/protocol/openid-connect/userinfo",
                        headers: {
                            "Authorization": "Bearer " + accessToken
                        }
                    })

                    return resp;
                }
                return fetch();
            }        
        }
    }

    return {
        getInstance: () => {
            if(!instance) instance = init();
            return instance;
        }
    };
})();

export default UserService;
