<template>

</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },
  created(){
  },
  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="postcss">
.mobile-nav {
  &__item {
    margin-bottom: 20px;
  }

  &::after {
    display: none;
  }

  .van-collapse-item__content {
    padding: 0;
  }

  .van-collapse-item__title {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }
}
</style>
