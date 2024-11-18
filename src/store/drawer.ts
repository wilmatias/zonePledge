import { defineStore } from "pinia";

interface SidebarStoreState {
    isSidebarOpen: boolean;
    isCoinSelection: boolean;
    isLanguage: boolean;
	isCS: boolean;
}

export const useSidebarStore = defineStore('sidebar', {
	state: (): SidebarStoreState => ({
        isSidebarOpen: false,
        isCoinSelection: false,
		isLanguage: false,
		isCS: false
    }),

	actions: {
		toggleSidebar() {
			this.isSidebarOpen = !this.isSidebarOpen;
		},

		toggleCoinSelection() {
			this.isCoinSelection = !this.isCoinSelection;
		},

		toggleLanguage() {
			this.isLanguage = !this.isLanguage;
		},

		toggleCS() {
			this.isCS = !this.isCS;
		}
	},

	getters: {
	}

});
