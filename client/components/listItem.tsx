import { CreateElement, VNode } from 'vue'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

interface Items {
  num: number,
  str: string,
  obj: object,
  array: number[],
}

@Component
export default class listItem extends Vue {
  @Prop({ type: Number, required: true, default: 0 }) num!: number;

  private value: Items = {
    num: 1,
    str: 'str',
    obj: {},
    array: [1, 2, 3, 4]
  }

  oprHandler(): void{
    const res = this.value.array.reduce((o: number, s: number) => {
      console.log("reduce", o, s);
      return o + s;
    }, 0);
    console.log("oprHandler", res)
  }

  mounted(){
    this.oprHandler();
  }

  render(h: CreateElement): VNode | null{
    const { num } = this;
    return (
      <li>{num}</li>
    )

  }

}
