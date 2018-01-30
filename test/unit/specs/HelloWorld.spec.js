import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

// describe块称为"测试套件"(test suite), 表示一组相关的测试. 它是一个函数, 第一个参数是测试套件的名称(通常写测试组件的名称, 这里即为Counter.js), 第二个参数是一个实际执行的函数.
// 测试脚本应该包含一个或多个describe, 每个describe块应该包括一个或多个it块
/*describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  })
})*/


describe('HelloWorld.vue', () => {
  it('点击按钮后, count的值应该为1', () => {
  //获取组件实例
  const Constructor = Vue.extend(HelloWorld);
  //挂载组件
  const vm = new Constructor().$mount();
  //获取button
  const button = vm.$el.querySelector('button');
  //新建点击事件
  const clickEvent = new window.Event('click');
  //触发点击事件
  button.dispatchEvent(clickEvent);
  //监听点击事件
  vm._watcher.run();
  // 断言:count的值应该是数字1
  expect(Number(vm.$el.querySelector('.num').textContent)).to.equal(1);
})
})
