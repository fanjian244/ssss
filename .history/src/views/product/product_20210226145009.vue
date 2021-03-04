<template>
  <div>
    <Form ref="formInline" :model="formInline" inline>
      <FormItem prop="classification" label="分类">
        <Input v-model="formInline.classification" placeholder="Username">
        </Input>
      </FormItem>
      <FormItem prop="password" label="关键词">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="Password"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
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
        password: "",
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