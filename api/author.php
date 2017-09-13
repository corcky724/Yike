<?php

	// 全部
	$allUrl = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 推薦
	$recUrl = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 轉換成JSON格式
	$allResult = file_get_contents($allUrl); //'{}'
	$recResult = file_get_contents($recUrl); //'{}'

	// 轉換成陣列格式
	$allResult = json_decode($allResult, true);
	$recResult = json_decode($recResult, true);

	// 拼湊數據
	$result = array('all'=>$allResult, 'rec'=>$recResult);

	// 返回JSON格式數據
	echo json_encode($result);





