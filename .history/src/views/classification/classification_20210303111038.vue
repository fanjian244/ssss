<template>
  <div>
    <div class="classification">
      <Button icon="ios-add">新增顶层分类</Button>
      <ButtonGroup>
        <Button icon="ios-text-outline">全名</Button>
        <Button icon="ios-text-outline">别名</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button icon="ios-checkmark">启用</Button>
        <Button icon="ios-text-outline">禁用</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button icon="ios-text-outline">删除</Button>
        <Button icon="ios-text-outline">刷新</Button>
    </ButtonGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法
  },
  mounted() {
    //生命周期--已加载
  },
  computed: {
    //计算数学
  },
  watch: {
    //数据监听
  },
  filters: {
    //过滤器
  },
};
</script>

<style lang='scss' scoped>
.classification {
  width: 100%;
  height: 60px;
  /*background-color: tomato;*/
  display: flex;
  flex-direction: row;
}
</style>