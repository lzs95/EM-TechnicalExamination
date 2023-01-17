import { defineStore } from 'pinia'


export const useUserStore = defineStore({
  id: "Users",
  state: () => ({
    displayedUsers:[],
    defaultUsers: [],


  }),

  getters:{

  },

actions:{
  setUsers(arrUsers)  {
    console.log("IRAN");
    return this.displayedUsers = arrUsers
  },

  setDeafultUsers(){
    this.defaultUsers = [...this.displayedUsers]
  },
}

})


