import { Module, VuexModule, MutationAction } from "vuex-module-decorators";

@Module({
  namespaced: true,
  name: 'operation'
})
export default class operation extends VuexModule {
  public _array: number[] = [];
  public _string: string = '';
  @MutationAction
  async arrayHandler({ app }: nuxtContext){
    console.log("MutationAction", app);
    return { _array: [1, 2, 3, 4, 5] };
  }
  @MutationAction
  async payloadHandler(payload:string){
    console.log("MutationAction",payload);
    return {_string: payload}
  }
}
