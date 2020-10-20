import { Store } from "vuex/types";
import { Context } from '@nuxt/types'

export const action = {
  async nuxtServerInit(store: Store<any>, context: Context){
    console.log("========= START :: nuxt server init =========");
  }
}

