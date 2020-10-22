import { CreateElement, VNode } from 'vue'
import { Component, Vue, Prop } from "nuxt-property-decorator";

//components
import ListItem from "@/components/listItem";

// util
import { map } from "@/utils/lodash";

@Component
export default class MainPage extends Vue {


  async asyncData({ app, store }: nuxtContext): Promise<any>{
    console.log("-------page init -------");
    let parallel = store.dispatch('operation/arrayHandler', store);
    let parallel1 = store.dispatch('operation/payloadHandler', "hello");
    await parallel;
    await parallel1;

    const res = require('static/dummy.json');
    console.log("async data res", res);
  }

  async fetch({ query, store }: nuxtContext){
    console.log("nuxt cycle fetch");
  }

  private listLength: number[] = [1, 2, 3, 4, 5];
  private booleanValue: boolean = false;
  private _string: string = 'string';
  private _number: number | undefined;

  fragment(index: number){
    return (
      <p>fragment {this._number} / {index} </p>
    )
  }

  fragmentCondition(type: number){
    let { _data }: any = this;
    switch (type) {
      case 1 :
        return <p>type1 {_data._string}</p>
        break;
      case 2:
        return this.booleanValue ? <p>click1 </p> : <p>click2</p>
        break;
    }
  }

  clickHandler(){
    console.log("========click======");
    this.booleanValue = !this.booleanValue;
  }

  mounted(): void{
    console.log("pages/index.tsx");
  }

  render(h: CreateElement): VNode{
    const { fragment, fragmentCondition } = this;
    return (
      <div>
        <p>Main</p>
        <ul>
          {this.listLength.map(item => (
            <ListItem num={item}></ListItem>
          ))}
        </ul>
        {fragment(1)}
        {fragmentCondition(1)}
        {fragmentCondition(2)}
        {fragmentCondition(3)}
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
