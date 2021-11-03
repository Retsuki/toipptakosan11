<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      default: 2,
      required: true,
    },
  },
  render() {
    return h(
      'h' + this.level,
      {
        class: ['h', `.h${this.level}`],
      },
      this.$slots,
    )
  },
})
</script>

<style lang="scss" module>
.h {
  font-weight: $fonnt-weight-bold;
  line-height: 1.5;
}

.h1 {
  font-size: 2rem;
}
.h2 {
  font-size: 1.8rem;
}
.h3 {
  font-size: 1.6rem;
}
.h4 {
  font-size: 1.4rem;
}
.h5 {
  font-size: 1.2rem;
}
.h6 {
  font-size: 1rem;
}
</style>
