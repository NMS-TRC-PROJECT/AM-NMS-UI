const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타겟 디렉토리 (백엔드쪽!)
  outputDir: "../study/src/main/resources/static",
  css: {
    loaderOptions : {
      sass : {
        additionalData : `@import "~@/assets/scss/reset.scss";`
      }
    }
  },
  // npm run serve 개발 진행시 포트가 다르기 때문에 프록시 설정해줘야 함
  // target : 백엔드 port가 들어감
  // changeOrigin -> true로 해야 cors 문제 해결할 수 있음
  devServer: {
    proxy: {
      '/': {
        target: "http://192.168.0.238:8080",
        changeOrigin: true,
        ws: false,
      }
    }
  }
})
