<template>
  <div class="login-box bg-dark d-flex justify-content-center">
    <div class="login-center bg-white p-3 rounded">
      <!-- 标题样式布局 -->
      <div
        class="mb-4 d-flex justify-content-center flex-column align-items-center"
      >
        <div class="d-flex align-items-center">
          <Icon type="md-briefcase" size="55" color="#2db7f5" />
          <h3 class="ml-2 text-muted">企业网盘</h3>
        </div>
        <span class="small text-muted mt-3">企业级网盘解决方案</span>
      </div>

      <!-- 表单样式布局 -->
      <Form :model="loginForm" :label-width="0" ref="loginForm" :rules="rules">
        <FormItem prop="username">
          <Input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码..."
          ></Input>
        </FormItem>
        <div class="d-flex align-items-center mb-2">
          <Checkbox v-model="loginForm.remember">自动登录</Checkbox>
          <a href="javascript:;" class="small ml-auto">忘记密码?</a>
          <span class="mx-1">|</span>
          <a href="javascript:;" class="small">注册账户</a>
        </div>
        <FormItem class="mb-1">
          <Button type="primary" long @click="submitLogin('loginForm')"
            >登录</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        remember: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不小于6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitLogin(formName) {
      console.log("123");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>
<style lang="scss" scope>
.login-box {
  height: 100%;
}
.login-center {
  width: 380px;
  height: max-content;
  margin-top: 50px;
  background: #fff;
}
</style>