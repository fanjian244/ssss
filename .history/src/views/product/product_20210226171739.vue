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
    <!-- <div >
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template>
        <Button type="primary" size="small" style="margin-right: 5px"
          >删除商品</Button
        >
        <Button type="error" size="small">修改商品</Button>
      </template>
    </div> -->
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
          key: "name",
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
          width: 150,
          align: "center",
          render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
          }
        },
      ],
      value2:[]
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