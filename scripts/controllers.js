// Controllers 模塊，用於管理所有的控制器。
angular.module('Controllers', [])

.controller('DemoController', ['$scope', function ($scope) {
	console.log('Controllers 模塊 的 控制器 成功了!');
}]);