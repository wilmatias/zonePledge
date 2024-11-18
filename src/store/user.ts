import { defineStore } from 'pinia';
import { makeRequest, makeRequestFormData } from '@/helper/api.ts';
import { API_ENDPOINTS } from '@/services/endpoints';

interface UserStoreState {
    error: null | Error;
    isLogin: boolean;
    userData: null | any;
    balanceData: null | any;
    walletbalance: null | any;
    address: string | any;
    locale: string | any;
    transactionResponse: string | any;
    isInvited: string | any;
    isLoading: string | any;
    haveAllowance: boolean;
    showLoginDrawer: boolean;
    showPasswordDrawer: boolean;
}

export const useUserStore = defineStore('user', {
    state: (): UserStoreState => ({
        error: null,
        isLogin: false,
        userData: null,
        balanceData: null,
        walletbalance: null,
        address: 'Connect',
        locale: 'en',
        transactionResponse: null,
        isInvited: null,
        isLoading: false,
        haveAllowance: false,
        showLoginDrawer: false,
        showPasswordDrawer: false,
    }),

    actions: {
        async resetAll() {
            this.error = null;
            this.isLogin = false;
            this.userData = null;
            this.balanceData = null;
            this.address = 'Connect';
            this.locale = 'en';
            this.transactionResponse = null;
        },

        async userLogin(data: any) {
            this.isLoading = true
            try {
                const response = await makeRequestFormData('post', API_ENDPOINTS.LOGIN, data);
                if(response.flag) {
                    this.userData = response.data;
                    this.address = this.userData?.address;
                    this.isLogin = true;
                   
                    this.error = null;
                    this.isLoading = false
                    return response.flag;
                } else {
                    this.isLoading = false
                    this.error = response.msg;
                    return response.flag;
                }
            } catch (error: any) {
                this.error = error;
            }
        },

        async userBalance(data: {address: string}) {
            try {
                const response = await makeRequest('get', '/api/openapi/GetWalletBalanceInfo', data);
                if(response.flag) {
                    this.balanceData = response.data;
                    this.error = null;
                }
            } catch (error: any) {
                this.error = error;
            }
        },

        async userPostAuth(data: any) {
            try {
                const response = await makeRequest('post', '/api/openapi/Authorize', data);
                if(response.flag) {
                    this.userData = response.data;
                    this.error = null;
                }
            } catch (error: any) {
                this.error = error;
            }
        },

        async userGetAuth(data: any) {
            try {
                const response = await makeRequest('get', '/api/openapi/getauthorizeAccount', data);
                if(response.flag) {
                    this.userData = response.data;
                    this.error = null;
                }
            } catch (error: any) {
                this.error = error;
            }

        },
        
        async submitCertification(data: any) {
            try {
                const response = await makeRequestFormData('post', '/api/UploadImg/Certification', data);
                if(response.flag) {
                    this.transactionResponse = response;
                    this.error = null;
                }
                return response.msg
            } catch (error: any) {
                this.error = error;
            }
        },

        async PostPlayerReceiveAddress(data: any) {
            try {
                const response = await makeRequestFormData('post', '/api/openapi/PostPlayerReceiveAddress', data);
                if(response.flag) {
                    this.transactionResponse = response;
                    this.error = null;
                }
                return response.msg
            } catch (error: any) {
                this.error = error;
            }
        },

        async setPassword(data: any) {
            try {
                const response = await makeRequestFormData('post', '/api/openapi/PostPlayerReg', data);
                if(response.flag) {
                    this.transactionResponse = response;
                    this.error = null;
                }
                return response.flag
            } catch (error: any) {
                this.error = error;
            }
        },

        async postLogin(data: any) {
            try {
                const response = await makeRequestFormData('post', '/api/openapi/PostPlayerLogin', data);
                if(response.flag) {
                    this.transactionResponse = response;
                    this.error = null;
                }
                return response
            } catch (error: any) {
                this.error = error;
            }
        },

        handleLogin(data: { address: string }) {
            return this.userLogin(data)
        },

        handleHaveAllowance(data: any) {
            this.haveAllowance = data;
        },

        getBalance() {
            const data = {
                address: this.address
            }
            this.userBalance(data)
        },

        updateAddress(adddress: string) {
            this.address = adddress
        },

        updataLocale(value: string) {
            this.locale = value;
        },

        handleInvited(data: any) {
            this.isInvited = data;
        },

        walletBalanceIs(value: any) {
            this.walletbalance = parseInt(value._hex, 16);
        },

        toggleLoginDrower(): any {
            this.showLoginDrawer = !this.showLoginDrawer;
        },

        togglePasswordDrawer(): any {
            this.showPasswordDrawer = !this.showPasswordDrawer;
        },
    },

    getters: {
        viewAddress(): string {
            return this.address;
        },

        viewUserId(): any {
            if(this.userData) {
                return this.userData.id;
            }
        },

        viewUserPoints(): any {
            if(this.userData) {
                return this.userData.points;
            }
        },

        viewPoolBalance(): any {
            if(this.userData) {
                return this.userData.exchange_usdt;
            }
        },

        viewWalletETH(): any {
            if(this.userData) {
                return this.userData.wallet_eth0;
            }
        },

        viewLockonLiquidity(): any {
            if(this.userData) {
                return this.userData.LockOnLiqudity;
            }
        },

        viewLockonLiquidityETH(): any {
            if(this.userData) {
                return this.userData.LockOnLiqudityEth;
            }
        },

        viewExtractable(): any {
            if(this.userData) {
                return this.userData.exchange_usdt;
            }
        },

        viewTeamLiquidity(): any {
            if(this.userData) {
                return this.userData.TeamLiquidityUsdt;
            }
        },

        viewTeamPeriodLiquidity(): any {
            if(this.userData) {
                return this.userData.teamperiodreward;
            }
        },

        viewIsInvited(): any {
            if(this.isInvited !== null) {
                return this.isInvited;
            }
        },

        viewNewId(): any {
            if(this.userData) {
                return this.userData.newid;
            }
        },

        viewURL(): any {
            if(this.userData) {
                return this.userData.url;
            }
        },

        viewBalance(): any {
            if(this.balanceData) {
                return this.balanceData.trade_usdt;
            }
        },
        
        viewBalanceExchange(): any {
            if(this.balanceData) {
                return this.balanceData.exchange_usdt;
            }
        },

        viewLtBalance(): any {
            if(this.userData) {
                return this.userData.lq_usdt;
            }

        },

        viewUserData(): any {
            if(this.userData) {
                return this.userData;
            }
        },

        viewLocale(): any {
            if(this.locale) {
                return this.locale;
            }
        }
    },
    persist:true
});