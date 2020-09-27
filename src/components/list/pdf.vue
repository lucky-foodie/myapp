<template>
  <div>
    <div class="pdf" v-if="lx == 1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1349"></use>
      </svg>
      <div>World</div>
    </div>
    <div class="pdf" v-if="lx == 2">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1343"></use>
      </svg>
      <div>图形</div>
    </div>
    <div class="pdf" v-if="lx == 3">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1341"></use>
      </svg>
      <div>音频</div>
    </div>
    <div class="pdf" v-if="lx == 4">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1333"></use>
      </svg>
      <div>视频</div>
    </div>
    <div class="pdf" v-if="lx == 5">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1345"></use>
      </svg>
      <div>动画</div>
    </div>
    <div class="pdf" v-if="lx == 6">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1347"></use>
      </svg>
      <div>压缩包</div>
    </div>
    <div class="pdf" v-if="lx == 7">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-opzu1339"></use>
      </svg>
      <div>其他</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  props: ['lx'],
  data() {
    return {};
  },
  mounted() {
    console.log(this.lx);
  },
  methods: {
    tz(url) {
      this.troute.query(url);
    },
  },
  computed: {
    ...mapMutations({
      mtab: 'tab',
    }),
    ...mapState({
      tille: 'tille',
    }),
  },
};
</script>

<style lang="scss" scoped>
.pdf {
  width: 92px;
  height: 108px;
  position: relative;
  .icon {
    width: 100%;
    height: 100%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
  }

  > div {
    position: absolute;
    bottom: 16px;
    font-size: 12px;
    text-align: center;
    width: 100%;
    color: #fff;
  }
}
</style>
