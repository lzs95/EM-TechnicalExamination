import { defineStore } from 'pinia'


export const useUserStore = defineStore({
  id: "Users",
  state: () => ({
    defaultUsers:[],
    userAscOrder:[],
    userDesscOrder:[]

  }),

  getters:{

  },

actions:{
  setUsers(arrUsers)  {
    return this.defaultUsers = arrUsers
  },

  filterBioAsc(){ 
    if(this.userAscOrder.length !== this.defaultUsers.length ){
      return this.defaultUsers.sort((a, b) => a.bio.length - b.bio.length);
      
    }else{
      return this.userAscOrder;
    }
   },

   filterBioDesc(){ 
    if(this.userAscOrder.length !== this.defaultUsers.length ){
      return this.defaultUsers.sort((a, b) => a.bio.length - b.bio.length);
      
    }else{
      return this.userAscOrder;
    }
   },

   displayStuff(){
    console.log(this.userAscOrder);
    console.log(this.defaultUsers);
  },
},


})


