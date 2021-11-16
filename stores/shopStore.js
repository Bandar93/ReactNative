import { makeAutoObservable } from "mobx";
import {api} from "./api";
console.log(api)

class ShopStore {
    shop = [];

    constructor(){
        makeAutoObservable(this);
    }

    fetchShop = async () => {
        try {
            const res = await api.get("/shops");
            this.shop = res.data;
        } catch (error) {
            console.log(error)
        }
    }
}

const shopStore = new ShopStore();
shopStore.fetchShop();
export default shopStore;