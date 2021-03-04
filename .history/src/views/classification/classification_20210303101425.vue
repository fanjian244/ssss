<template>
  <div>
    <div class="classification">
      <Button>Default</Button>
      <RadioGroup v-model="buttonSize" type="button">
            <Radio label="default">Default</Radio>
            <Radio label="small">small</Radio>
        </RadioGroup>
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