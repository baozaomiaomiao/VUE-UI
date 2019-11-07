const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
	it('存在.', () => {
		expect(Input).to.exist;
	});

	describe('props', () => {
		const Constructor = Vue.extend(Input);
		let vm;
		afterEach(() => {
			// 测试完成 销毁vue实例
			vm.$destroy();
		});

		it('接收 value', () => {
			vm = new Constructor({
				propsData: {
					value: 'test'
				}
			}).$mount();
			const inputElement = vm.$el.querySelector('input');
			expect(inputElement.value).to.equal('test');
		});

		it('接收 disabled', () => {
			vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount();
			const inputElement = vm.$el.querySelector('input');
			expect(inputElement.disabled).to.equal(true);
		});

		it('接收 readonly', () => {
			vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount();
			const inputElement = vm.$el.querySelector('input');
			expect(inputElement.readOnly).to.equal(true);
		});

		it('接收 error', () => {
			vm = new Constructor({
				propsData: {
					error: '错误'
				}
			}).$mount();
			const useElement = vm.$el.querySelector('use');
			expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
			const errorMessage = vm.$el.querySelector('.error-message');
			expect(errorMessage.innerText).to.equal('错误');
		});
	});
	describe('事件', () => {
		const Constructor = Vue.extend(Input);
		let vm;
		afterEach(() => {
			// 测试完成 自动销毁vue实例
			vm.$destroy();
		});
		it('支持 change/input/focus/blur 事件', () => {
			['change', 'input', 'focus', 'blur'].forEach(evemtName => {
				vm = new Constructor().$mount();
				const callback = sinon.fake();
				// 监听change事件，触发假的回调函数;
				vm.$on(evemtName, callback);
				// 生成 change事件
				let event = new Event(evemtName);
				let inputElement = vm.$el.querySelector('input');
				inputElement.dispatchEvent(event);
				expect(callback).to.have.been.calledWith(event);
			});
		});
	});
});
