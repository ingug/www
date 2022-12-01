<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

    //세션변수
    //view.php?num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result); //하나의 레코드 가져오기    

	$item_num = $row[num];
	$item_id = $row[id];
	$item_name = $row[name];
  	$item_nick = $row[nick];
	$item_hit = $row[hit];
    $item_date = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	$item_content = $row[content];
	$is_html = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content); //엔터값을 <br>태그로 변경
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항 상세</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<script>
		function del(href) //delete.php?num=7(num)
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) 
			{
				document.location.href = href;
			}
		}
	</script>
</head>
<body>
	<? include "../common/sub_header.html" ?>
	
	<div class="main">
            <h3>인사제도</h3>
    </div>

	<div class="subNav">
		<ul>
            <li><a href="../sub6/sub6_1.html">인사관리</a></li>
            <li ><a href="../sub6/sub6_2.html">FAQ</a></li>
            <li><a href="../sub6/sub6_3.html">문의하기</a></li>
            <li class="current"><a href="../greet/list.php">공지사항</a></li>
        </ul>
    </div>

    <article id="content">
	<div class="titleArea">
                <div class="lineMap">
                    <span>홈</span>&gt;<span>인재채용</span>&gt;<strong><span>공지사항</span></strong>
                </div>
                <h2>공지사항</h2>
            </div>
		<div class="content_toptopic">
			<h3>NOTICE DETAILS</h3>
		</div>

		<form  name="view_form" class="view_form"> 

			<div class="view_title">
				<div id="view_title1">
					<?= $item_subject ?>
				</div>
				<div id="view_title2">
					<ul>
						<li><?= $item_nick ?></li>
						<li><i class="fas fa-eye"></i><span class="hidden">조회</span> <?= $item_hit ?></li>
						<li><?= $item_date ?></li>
					</ul>
				</div>
				<div id="view_title3">
					<ul class="btn_wrap btn_wrap2">
						<? 
							if($userid==$item_id || $userlevel==1 || $userid=="cesco")
							{
						?>
						<li><a href="modify_form.php?num=<?=$num?>&page=<?=$page?>" class="btn btn1">수정</a></li>
						<li><a href="javascript:del('delete.php?num=<?=$num?>')" class="btn btn2">삭제</a></li>
						<?
							}
						?>
					</ul>
				</div>
			</div>

			<div id="view_content">
				<?= $item_content ?>
			</div>


			<div class="view_gbtn">
				<ul class="btn_wrap btn_wrap2 btn_list">
					<li><a href="list.php?page=<?=$page?>" class="btn btn2">목록</a></li>
					<? 
						if($userid)  //로그인이 되면 글쓰기
						{
					?>
					<li><a href="write_form.php" class="btn btn1">글쓰기</a></li>
					<?
						}
					?>
				</ul>
			</div>


		</form>
    </article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
