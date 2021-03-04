<template>
  <div>
    <!-- 搜索 -->
    <Form
      ref="formInline"
      :model="formInline"
      :label-width="80"
      style="width: 800px; display: flex; top: 10px; position: relative"
    >
      <FormItem prop="classification" label="账号">
        <Input
          v-model="formInline.classification"
          placeholder="请输入账号/昵称"
        >
          <Icon type="ios-search" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="name" label="关键词">
        <Input v-model="formInline.name" placeholder="请输入关键词">
          <Icon type="ios-search" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="payment" label="支付方式">
        <Input
          v-model="formInline.payment"
          placeholder="请输入支付方式"
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
    <Divider class="divider" />
    <div style="display: flex; flex-direction: row">
      <Button size="default">
        <Icon type="ios-arrow-round-down"></Icon>
        导出数据
      </Button>
      <Button size="default" style="left: 10px; position: relative">
        <Icon type="ios-print-outline"></Icon>
        打印
      </Button>
      <Tabs size="small">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      // 搜索
      formInline: {
        classification: "", //分类
        name: "", //关键词
        payment: "", //支付方式
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
.divider {
  margin: 2px 0;
}
</style>