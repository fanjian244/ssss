<template>
  <div>
    <div class="create">新增商品</div>
    <Divider class="divider" />
    <Tabs value="name1">
      <!--- 基础设置 --->
      <TabPane label="基础设置" name="name1">
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80"
        >
          <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入商品名称" />
          </FormItem>
          <FormItem label="促销语" prop="promotion">
            <Input v-model="formValidate.mail" placeholder="可输入商品促销语" />
          </FormItem>
          <FormItem label="分类" prop="classification">
            <Select
              v-model="formValidate.city"
              placeholder="请选择商品分类，试试搜索：分类"
            >
              <Option value="beijing">手机</Option>
            </Select>
          </FormItem>
          <FormItem label="品牌" prop="brand">
            <Select
              v-model="formValidate.citys"
              placeholder="请选择商品品牌，试试搜索：品牌"
            >
              <Option value="beijings">品牌</Option>
            </Select>
          </FormItem>
          <!--- 商品详情叙述 --->
          <FormItem label="关键词" prop="word">
            <Input
              v-model="formValidate.mail"
              placeholder="可输入商品关键词，有利于SEO搜索"
            />
          </FormItem>
          <FormItem label="页面描述" prop="description">
            <Input
              v-model="formValidate.mail"
              placeholder="可输入商品关键词，有利于SEO搜索"
            />
          </FormItem>
          <FormItem label="商品计量">
            <InputNumber :max="1000" :min="1" v-model="value1"></InputNumber>
          </FormItem>
          <FormItem label="实际库存">
            <InputNumber :max="1000" :min="1" v-model="value2"></InputNumber>
          </FormItem>
          <FormItem label="是否推荐" prop="recommend">
            <RadioGroup v-model="formValidate.recommend">
              <Radio label="yes">是</Radio>
              <Radio label="no">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="是否热卖" prop="Sellers">
            <RadioGroup v-model="formValidate.Sellers">
              <Radio label="yes">是</Radio>
              <Radio label="no">否</Radio>
            </RadioGroup>
          </FormItem>
          <!--- 上传图片 --->
          <div class="tabpane">
            <Form :rules="ruleValidate" :label-width="80">
              <FormItem label="商品相册" prop="album"></FormItem>
            </Form>
            <!--- 图片框上传 --->
            <div>
              <Button @click="modal7 = true" class="album" type="dashed"
                >+</Button
              >
              <Modal
                title="选择图片"
                v-model="modal7"
                class-name="vertical-center-modal"
              >
                <Upload
                  multiple
                  type="drag"
                  action="//jsonplaceholder.typicode.com/posts/"
                >
                  <div style="padding: 20px 0">
                    <Icon
                      type="ios-cloud-upload"
                      size="52"
                      style="color: #3399ff"
                    ></Icon>
                    <p>将资源拖到此处，或点击上传</p>
                  </div>
                </Upload>
                <p>请选择资源进行(支持拖拽)上传，大小不能超过 1M</p>
                <Cascader v-model="value8" style="width: 70%"></Cascader>
              </Modal>
              <!--- 按钮上传 --->
              <div class="upload">
                <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">资源选择</Button>
                </Upload>
                <div>
                  <Button
                    @click="modal7 = true"
                    type="dashed"
                    icon="md-cloud-upload"
                    >上传图片</Button
                  >
                  <Modal title="选择图片" v-model="modal7">
                    <Upload
                      multiple
                      type="drag"
                      action="//jsonplaceholder.typicode.com/posts/"
                    >
                      <div style="padding: 20px 0">
                        <Icon
                          type="ios-cloud-upload"
                          size="52"
                          style="color: #3399ff"
                        ></Icon>
                        <p>将资源拖到此处，或点击上传</p>
                      </div>
                    </Upload>
                    <p>请选择资源进行(支持拖拽)上传，大小不能超过 1M</p>
                    <Cascader v-model="value8" style="width: 70%"></Cascader>
                  </Modal>
                </div>
                <div>
                  第一张图片将作为商品主图，拖动可调整图片位置，建议图片尺寸800x800
                </div>
              </div>
            </div>
          </div>
          <!--- 商品详情 --->
          <div class="tabpane">
            <Form :rules="ruleValidate" :label-width="80">
              <FormItem label="商品详情" prop="details"></FormItem>
            </Form>
            <!--- 图片框上传 --->
            <div>
              <Button @click="modal9 = true" class="album" type="dashed"
                >+</Button
              >
              <Modal
                title="选择图片"
                v-model="modal9"
                class-name="vertical-center-modal"
              >
                <Upload
                  multiple
                  type="drag"
                  action="//jsonplaceholder.typicode.com/posts/"
                >
                  <div style="padding: 20px 0">
                    <Icon
                      type="ios-cloud-upload"
                      size="52"
                      style="color: #3399ff"
                    ></Icon>
                    <p>将资源拖到此处，或点击上传</p>
                  </div>
                </Upload>
                <p>请选择资源进行(支持拖拽)上传，大小不能超过 1M</p>
              </Modal>
              <!--- 按钮上传 --->
              <div class="upload">
                <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">资源选择</Button>
                </Upload>
                <div>
                  <Button
                    @click="modal9 = true"
                    type="dashed"
                    icon="md-cloud-upload"
                    >上传图片</Button
                  >
                  <Modal title="选择图片" v-model="modal9">
                    <Upload
                      multiple
                      type="drag"
                      action="//jsonplaceholder.typicode.com/posts/"
                    >
                      <div style="padding: 20px 0">
                        <Icon
                          type="ios-cloud-upload"
                          size="52"
                          style="color: #3399ff"
                        ></Icon>
                        <p>将资源拖到此处，或点击上传</p>
                      </div>
                    </Upload>
                    <p>请选择资源进行(支持拖拽)上传，大小不能超过 1M</p>
                  </Modal>
                </div>
                <div>
                  第一张图片将作为商品主图，拖动可调整图片位置，建议图片尺寸800x800
                </div>
              </div>
            </div>
          </div>
          <Divider>购买信息</Divider>
          <FormItem label="市场价">
            <InputNumber
              :max="100000000"
              :min="1"
              :step="1.0"
              v-model="value3"
            ></InputNumber>
          </FormItem>
          <FormItem label="本店价">
            <InputNumber
              :max="100000000"
              :min="1"
              :step="1.0"
              v-model="value4"
            ></InputNumber>
            <div>多规格商品按实际规格中的本店价计算</div>
          </FormItem>
          <FormItem label="最少起订">
            <InputNumber :max="1000" :min="1" v-model="value5"></InputNumber>
            <div>该商品最低的起订量，0为不限制</div>
          </FormItem>
          <FormItem label="限购数量">
            <InputNumber :max="100" :min="1" v-model="value6"></InputNumber>
            <div>同个账号下最多限购该商品的数量，0为不限制</div>
          </FormItem>
          <FormItem>
            <Button type="primary">确定</Button>
            <Button style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  data() {
    return {
      // 输入框
      formValidate: {
        name: "", //名称
        promotion: "", //促销语
        classification: "", //分类
        brand: "", //品牌
        recommend: "", //是否推荐
        Sellers: "", //是否热卖
        word: "", //关键词
        description: "", //页面描述
      },
      //   规则
      ruleValidate: {
        // 名称
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],
        // 分类
        classification: [
          {
            required: true,
            message: "至少选择一项",
            trigger: "change",
          },
        ],
        // 上传照片
        album: [
          {
            required: true,
            trigger: "change",
          },
        ],
        details: [
          {
            required: true,
            trigger: "change",
          },
        ],
      },
      value1: 1, //商品计量
      value2: 1, //实际库存
      value3: 0.0, //市场价
      value4: 0.0, //本店价
      value5: 0, //最少起订
      value6: 0, //限购数量
      modal7: false, //上传照片
      value8: [], //目录
      modal9: false, //上传照片
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
.create {
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}
.divider {
  margin: 2px 0;
}
.album {
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 25px;
}
.tabpane {
  display: flex;
  flex-direction: row;
}
.vertical-center-modal {
  height: 200px;
  width: 200px;
  background-color: blue;
}
.upload {
  display: flex;
  flex-direction: column;
}
</style>