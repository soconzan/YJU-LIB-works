const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', // 이 경로로 시작하는 HTTP 요청을 대상으로 프록시 설정
        createProxyMiddleware({
            target: 'https://ebook.yjc.ac.kr', // 프록시 요청을 전송할 서버
            changeOrigin: true, // virtual hosted 사이트에 필요, 호스트 헤더가 프록시 대상과 일치하도록 변경
            // pathRewrite: {'^/api' : ''} // 경로 재작성 설정, '/api'를 제거하고 요청을 전송
        })
    );
};
