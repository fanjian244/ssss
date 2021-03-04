<template>
  <div>
    <Form ref="formInline" :model="formInline" :label-width="80" style="width: 600px;display: flex;">
      <FormItem prop="classification" label="分类">
        <Input v-model="formInline.classification" placeholder="请输入商品分类" />
      </FormItem>
      <FormItem prop="name" label="关键词">
        <Input
          v-model="formInline.name"
          placeholder="请输入关键词" />
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      formInline: {
        classification: "",
        name: "",
      },
    };
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
</style>