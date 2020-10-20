import { CreateElement, VNode } from 'vue';
import { Component, Vue, namespace } from "nuxt-property-decorator";

@Component
export default class DefaultLayout extends Vue {

  render(h: CreateElement): VNode{
    return (
      <div>
        <div>Top</div>
        <section>
          <nuxt></nuxt>
        </section>
        <loading></loading>
      </div>
    )
  }
}
