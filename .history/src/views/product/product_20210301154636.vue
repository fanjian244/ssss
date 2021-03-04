<template>
  <div>
    <!-- 搜索 -->
    <Form
      ref="formInline"
      :model="formInline"
      :label-width="80"
      style="width: 600px; display: flex; top: 10px; position: relative"
    >
      <FormItem prop="classification" label="分类">
        <Input
          v-model="formInline.classification"
          placeholder="请输入商品分类"
        />
      </FormItem>
      <FormItem prop="name" label="关键词">
        <Input v-model="formInline.name" placeholder="请输入关键词">
          <Icon type="ios-search" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary">查询</Button>
      </FormItem>
    </Form>
    <Divider class="divider" />
    <!-- 商品列表 -->
    <Table :columns="columns1" :data="value2">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">修改商品</Button>
        <Button type="error" size="small" @click="remove(row)">删除商品</Button>
      </template>
    </Table>
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
      },
      //   列表横坐标
      columns1: [
        {
          title: "名称",
          slot: "name",
        },
        {
          title: "价格(元)",
          key: "price",
        },
        {
          title: "数量(件)",
          key: "cont",
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center",
          //   操作按钮
          // render: (h, params) => {
          // return h("div", [
          //   h(
          //     "Button",
          //     {
          //       props: {
          //         type: "primary",
          //         size: "small",
          //       },
          //       style: {
          //         marginRight: "5px",
          //       },
          //       on: {
          //         click: () => {
          //           this.show;
          //         },
          //       },
          //     },
          //     "修改商品"
          //   ),
          //   h(
          //     "Button",
          //     {
          //       props: {
          //         type: "error",
          //         size: "small",
          //       },
          //       on: {
          //         click: () => {
          //           this.remove;
          //         },
          //       },
          //     },
          //     "删除商品"
          //   ),
          // ]);
          // },
        },
      ],
      value2: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法

    // 修改商品
    show(row){
      console.log(row);
    },
    // 删除商品
    remove(row) { 
      // console.log(row);
        this.$api.delGoods({id:row._id}).then((res) => {
          // console.log(res)
        });
    },
  },
  mounted() {
    //生命周期--已加载
    
    // 商品列表
    this.$api.getGoods().then((res) => {
      //   console.log(res);
      this.value2 = res.data;
      console.log(this.value2);
    });
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