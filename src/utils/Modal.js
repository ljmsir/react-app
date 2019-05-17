/**
 * author: liaojianming
 * date: 2018-12-10
 * description: 人机对话js，调用antd Modal组件
 */
import {Modal} from 'antd';

export default {
 	info: function(title, message, callBack) {
 		Modal.info({
 			title: title,
 			content: message,
 			okText: '知道了',
 			onOk: function() {
 				callBack && callBack();
 			}
 		});
 	},
 	success: function(title, message, callBack) {
 		Modal.success({
 			title: title,
 			content: message,
 			okText: '知道了',
 			onOk: function() {
 				callBack && callBack();
 			}
 		});
 	},
 	error: function(title, message, callBack) {
 		Modal.error({
 			title: title,
 			content: message,
 			okText: '知道了',
 			onOk: function() {
 				callBack && callBack();
 			}
 		});
 	},
 	warning: function(title, message, callBack) {
 		Modal.warning({
 			title: title,
 			content: message,
 			okText: '知道了',
 			onOk: function() {
 				callBack && callBack();
 			}
 		});
 	},
 	confirm: function(title, message, confirm, cancel) {
 		Modal.confirm({
 			title: title,
 			content: message,
 			okText: '确定',
 			cancelText: '取消',
 			onOk: function() {
				confirm && confirm();
 			},
 			onCancel: function() {
 				cancel && cancel();
 			}
 		});
 	}
}