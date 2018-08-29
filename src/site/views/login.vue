<template>
    <div id="login" class="login-container">
        <div class="flex-item">
            <div class="flex height-100 flex-center">
                <div class="flex-item"></div>
                <div class="flex-item">
                    <el-card class="login-card" v-loading="loading">
                        <div class="card-title">管理后台</div>
                        <el-form :model="loginForm" ref="loginForm" class="p-a-2">
                            <el-form-item
                                prop="account"
                                :rules="[{ required: true, message: '请输入账户', trigger: 'blur'}]"
                                class="login-input m-b-2"
                            >
                                <el-input
                                    v-model="loginForm.account"
                                    placeholder="请输入手机号"
                                    prefix-icon="el-icon-message"
                                    clearable
                                >
                        <span slot="suffix" v-if="error" class="color-error f-s-mini">
                            <span class="input-suffix-text">{{warning}}</span>
                            <i class="el-input__icon el-icon-warning"></i>
                        </span>
                                </el-input>
                            </el-form-item>
                            <el-form-item
                                prop="pass"
                                :rules="[{ required: true, message: '请输入密码', trigger: 'blur' },]"
                                class="login-input m-b-2"
                                v-if="loginStatus === 'login'"
                            >
                                <el-input
                                    type="password"
                                    v-model="loginForm.pass"
                                    auto-complete="off"
                                    placeholder="请输入密码"
                                    prefix-icon="el-icon-goods"
                                    clearable
                                ></el-input>
                            </el-form-item>
                            <div v-if="loginStatus === 'login'">
                                <el-button
                                    type="primary"
                                    @click="submitForm('loginForm')"
                                    style="display: block;width: 100%;margin-top: 20px"
                                    v-if="loginStatus === 'login'"
                                >登录</el-button>
                            </div>
                        </el-form>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
          ...mapActions(['checkLoginUser']),
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                let params = {
                  account: this.loginForm.account,
                  password: this.loginForm.pass,
                };
                this.loading = true;
                this.checkLoginUser(params).then(result => {
                  console.log(result)
                  this.loading = false;
                  if(result.status === 'ok'){
                    localStorage.setItem('cur_account_account', this.loginForm.account);
                    this.$router.push({path: '/worktable'});
                  } else {
                    this.showError(result.msg);
                  }
                });
              }
              else{
                this.showError('信息填写错误!');
              }
            });
          },
          showError(text) {
            this.warning = text;
            this.error = true;
            setTimeout(() => { this.error = false },2000);
          },
        },
        data() {
            return {
                loginForm: {
                    account: '',
                    pass: '',
                },
                loginStatus: 'login',       // login, reset 两种状态
                remember: true,
                warning: '',
                error: false,
                cur_account_id: 0,
                pre_account: '',
                loading: false,
            }
        },
    }
</script>
