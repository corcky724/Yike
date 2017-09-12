// Controllers 模塊，用於管理所有的控制器。
angular.module('Controllers', [])

// 控制器成功啟動。
.controller('DemoController', ['$scope', function ($scope) {
	
}])

// 側邊導航 控制器。
/*
	循環生成側邊導航。
*/
.controller('NavController', ['$scope', function ($scope) {
	$scope.navs = [
		{'title': '今日一刻', 'icon': 'icon-home','link': '#!/today'},
		{'title': '往期內容', 'icon': 'icon-file-empty','link': '#!/older'},
		{'title': '熱門作者', 'icon': 'icon-pencil','link': '#!/author'},
		{'title': '欄目瀏覽', 'icon': 'icon-menu','link': '#!/category'},
		{'title': '我的喜歡', 'icon': 'icon-heart','link': '#!/favourite'},
		{'title': '設置', 'icon': 'icon-cog','link': '#!/settings'},
	];
}])

// 今日一刻 控制器。
.controller('TodayController', ['$scope', '$http', '$filter', '$rootScope',function ($scope, $http, $filter, $rootScope) {
	// 獲取今日時間，並使用數據過濾的 AngularJS 物件，進行過濾。
	/*
		半夜可能會失效，可能是伺服器數據未更新。
	*/
	var today = $filter('date')(new Date, 'yyyy-MM-dd');
	
	$http({
		'url': './api/today.php',
		'method': 'get',
		'params': {'today': today}
	}).then(function (request) {
		$scope.data = request.data.posts;
		console.log( request.data );
	});
}])

// 往期內容 控制器。
.controller('OlderController', ['$scope', '$http', '$rootScope', function ($scope, $http ,$rootScope) {
	$http({
		'url': './api/older.php',
		'method': 'get'
	}).then(function (request) {
		$scope.data = request.data.posts;
		console.log( request.data );
	});
}])

// 熱門內容 控制器。
.controller('AuthorController', ['$scope', function ($scope) {
	
}])

// 欄目瀏覽 控制器。
.controller('CategoryController', ['$scope', function ($scope) {
	
}])

// 我的喜歡 控制器。
.controller('FavouriteController', ['$scope', function ($scope) {
	
}])

// 設置 控制器。
.controller('SettingsController', ['$scope', function ($scope) {
	
}])