import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'


@Component
export default class Loading extends Vue {

  render(h: CreateElement): VNode | null{
    return (
      <div class="loading">
        <p>loading</p>
      </div>
    )

  }

}
