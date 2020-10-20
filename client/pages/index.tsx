import { CreateElement, VNode } from 'vue'
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class MainPage extends Vue {
  async asyncData({ app, store }: nuxtContext): Promise<any>{
    console.log("-------page index -------", app, store);
    let parallel = store.dispatch('operation/arrayHandler', store);
    let parallel1 = store.dispatch('operation/payloadHandler', "hello");
    await parallel;
    await parallel1;
  }

  mounted(): void{
    console.log("pages/index.tsx");
  }

  render(h: CreateElement): VNode{
    return (
      <div><p>Main</p></div>
    )
  }


}
