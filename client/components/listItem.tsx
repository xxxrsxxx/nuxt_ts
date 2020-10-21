import { CreateElement, VNode } from 'vue'
import { Component, Vue, Prop } from 'nuxt-property-decorator'


@Component
export default class listItem extends Vue {
  @Prop({ type: Number, required: true, default: 0 }) num!: number;

  render(h: CreateElement): VNode | null{
    const { num } = this;
    return (
      <li>{num}</li>
    )

  }

}
