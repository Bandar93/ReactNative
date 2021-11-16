import { makeAutoObservable } from "mobx";
import {api} from "./api";
console.log(api)

class ShopStore {
    shop = [];
    isLoading = true;

    constructor(){
        makeAutoObservable(this);
    }

    fetchShop = async () => {
        try {
            const res = await api.get("/shops");
            this.shop = res.data;
            this.isLoading = false;
        } catch (error) {
            console.log(error)
        }
    }
}

const shopStore = new ShopStore();
shopStore.fetchShop();
export default shopStore;