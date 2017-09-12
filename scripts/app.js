// Yike 主模塊。
var Yike = angular.module('Yike', ['ngRoute', 'Controllers', 'Directives']);

// 單頁面應用程式，通過 哈希值 完成。
/*
	使用 angular-route 差件，並通過 AJAX 完成。
	
	需要應對 側邊導航
*/
Yike.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/today', {
		'templateUrl': './views/today.html',
		'controller': 'TodayController'
	})
	.when('/older', {
		'templateUrl': './views/older.html',
		'controller': 'OlderController'
	})
	.when('/author', {
		'templateUrl': './views/author.html',
		'controller': 'AuthorController'
	})
	.when('/category', {
		'templateUrl': './views/category.html',
		'controller': 'CategoryController'
	})
	.when('/favourite', {
		'templateUrl': './views/favourite.html',
		'controller': 'FavouriteController'
	})
	.when('/settings', {
		'templateUrl': './views/settings.html',
		'controller': 'SettingsController'
	})
	.otherwise({
		'redirectTo': '/today'
	});
}]);

// run 方法，直接使用 AngularJS物件，並且不使用 AngularJS表達式、模型、數據、... 等等數據相關時使用的方法。
Yike.run(['$rootScope', function($rootScope) {
	// 全局方法，側邊導航動畫。
	/*
		MENU按鈕 執行的側邊導航動畫，是通過 Class 的 collapse 設置。
		
		而 collapse 設置的樣式，是 transform(變形) 中的 translate(移動) 來達到動畫效果。
	*/
	$rootScope.collapsed = false;
	
	$rootScope.toggle = function() {
		// MENU按鈕狀態的紀錄。
		$rootScope.collapsed = !$rootScope.collapsed;
		
		// 側邊導航的動畫設置。
		/*
			transform(變形) 中的 translate(移動)。
			
			transition(過度) 中的 transition-duration(動畫執行時間) 與 transition-delay(動畫延遲)。
		*/
		var aNavs = document.querySelectorAll('.navs dd');
		var i = 0, len = aNavs.length;
		if($rootScope.collapsed) {
			// MENU按鈕 collapsed = true 時，
			for( i = 0; i < len; i++ ) {
				aNavs[i].style.transform = 'translate(0)';
				aNavs[i].style.transitionDelay = '0.2s';
				aNavs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			};
		} else {
			for( i = len-1; i > -1; i-- ) {
				aNavs[i].style.transform = 'translate(-100%)';
				aNavs[i].style.transitionDelay = '';
				aNavs[i].style.transitionDuration = (len - i) * 0.15 + 's';
			};
		};
	};
}]);