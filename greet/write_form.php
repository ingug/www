<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항 글쓰기</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="./css/greet.css">
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
            <h3>NOTICE WRITING</h3>
        </div>

		<form  name="board_form" class="board_form" method="post" action="insert.php"> 
			<div id="write_form">

				<div class="row" id="write_row1">
                    <label for="nick">작성자</label>
					<input type="text" name="nick" id="nick" class="disabled_input " value="<?=$usernick?>" disabled>
                    <div id="loadtext2"></div>  
                </div>

				<div class="row">
                    <label for="subject">제목</label>
                    <input type="text" name="subject" id="subject" placeholder="제목을 입력해주세요.">
                </div>

				<div class="row">
                    <label for="text_content">내용</label>
                    <textarea name="content" id="text_content" class="text_content" placeholder="내용을 입력해주세요."></textarea>
                </div>

			</div>
			<div id="page_button">
				<ul class="btn_wrap btn_wrap2" id="write_button">
					<li><a href="list.php" class="btn btn2">취소</a></li>
					<li><button type="submit" value="등록" class="btn btn1"><span>등록</span></button></li>
				</ul>
			</div>
		</form>
		
    </article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>