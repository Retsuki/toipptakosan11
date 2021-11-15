<template>
  <t-architectures :architectures="architectures" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TArchitectures from '../components/templates/TArchitectures.vue'

export default defineComponent({
  components: { TArchitectures },
  setup() {
    const architectures = ref([
      {
        id: '1',
        img: 'src/assets/images/default.png',
        name: '銀行連携アーキテクチャ',
        tags: ['freee', 'GCP', 'Redis'],
      },
      {
        id: '2',
        img: 'src/assets/images/default.png',
        name: '銀行連携アーキテクチャ',
        tags: ['freee', 'GCP', 'Redis'],
      },
      {
        id: '3',
        img: 'src/assets/images/default.png',
        name: '銀行連携アーキテクチャ',
        tags: ['freee', 'GCP', 'Redis'],
      },
      {
        id: '4',
        img: 'src/assets/images/default.png',
        name: '銀行連携アーキテクチャ',
        tags: ['freee', 'GCP', 'Redis'],
      },
    ])
    return { architectures }
  },
})
</script>

<style lang="scss" module></style>
