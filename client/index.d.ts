import { Vue } from "nuxt-property-decorator";
import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module '*.tsx' {
  export default Vue
}

declare global {
  type nuxtContext = Context & {
    $axios: NuxtAxiosInstance
  }
}
