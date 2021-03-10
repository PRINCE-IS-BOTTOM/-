<template>
  <Layout class="layout-swipper">
    <Header class="bg-white px-0 layout-header">
      <Menu
        mode="horizontal"
        theme="light"
        :active-name="topActive"
        @on-select="handleTopMenuSelect"
        class="d-flex"
      >
        <div class="meun-logo">企业网盘</div>
        <MenuItem :name="key" v-for="(item, key) in topMenus" :key="key">
          <Icon :type="item.icon" />
          {{ item.title }}
        </MenuItem>
        <div class="ml-auto mr-3">
          <Dropdown placement="bottom-end">
            <a href="javascript:void(0)">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              管理员
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>个人资料</DropdownItem>
              <DropdownItem>修改密码</DropdownItem>
              <DropdownItem>安全退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Menu>
    </Header>
    <Layout>
      <Sider hide-trigger class="slider">
        <Menu
          theme="light"
          :active-name="sliderActive"
          width="200px"
          class="sliderMeun"
          @on-select="handleTopSliderSelect"
        >
          <MenuGroup title="全部文件">
            <MenuItem name="1">
              <Icon type="md-document" />
              图片
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-chatbubbles" />
              音乐
            </MenuItem>
            <MenuItem name="3">
              <Icon type="md-chatbubbles" />
              视频
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-chatbubbles" />
              其他
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="其他操作">
            <MenuItem name="5">
              <Icon type="md-heart" />
              我的分享
            </MenuItem>
            <MenuItem name="6">
              <Icon type="md-leaf" />
              回收站
            </MenuItem>
          </MenuGroup>
        </Menu>

        <div class="slider-capacity p-3">
          <!-- 网盘容量的进度条 -->
          <Progress
            :percent="90"
            hide-info
            :stroke-color="['#108ee9', '#87d068']"
          />
          <!-- 网盘容量的文字提示 -->
          <div class="d-flex justify-content-between mt-2">
            <span class="small">总共:100GB</span>
            <span class="small text-warning">已用:90GB</span>
          </div>
        </div>
      </Sider>
      <Content>
          <div class="bg-danger layout-content">
              <div class="content-box">
                  <div v-for="(item ,key) in 500" :key="key">{{key}}</div>
              </div>
          </div>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      topActive: 0,
      sliderActive: 1,
      topMenus: [
        {
          icon: "ios-paper",
          title: "网盘",
        },
        {
          icon: "ios-people",
          title: "分享",
        },
        {
          icon: "ios-construct",
          title: "更多",
        },
      ],
    };
  },
  methods: {
    //   获取并设置点击的菜单下标
    handleTopMenuSelect(index) {
      console.log(index);
      this.topActive = index;
    },
    // 获取并设置右侧菜单下表
    handleTopSliderSelect(index) {
      console.log(index);
      this.sliderActive = index;
    },
  },
};
</script>
<style scoped="scoped">
.layout-header {
  height: 60px;
  line-height: 60px;
}
.layout-swipper {
  height: 100%;
}

.meun-logo {
  width: 200px;
  text-align: center;
  font-size: 25px;
}
.slider,
.sliderMeun {
  background: #ebf0f1;;
}
.sliderMeun {
  border-right: none;
}
.slider-capacity {
  width: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
}
/deep/ .ivu-progress-inne {
  background-color: #fff!important;
  border: 1px solid #eee!important;
}
.layout-content{
    height: 100%;
    position: relative;
}
.content-box{
    position: absolute;
    overflow-y: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}
</style>