<!DOCTYPE html>
<html>
<head>

	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<title>...</title>

	<link	rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
			integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ=="
			crossorigin="anonymous"/>
</head>
<body>

	<div class="modal" id="itemModal" tabindex="-1" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title">&nbsp;</h4>
				</div>
				<div class="modal-body">

					Parent item<br/>
					<select class="form-control" id="item_parent">
						<option value=""></option>
						<option value="1">1</option>
						<option value="2">2</option>
					</select>

					<br/>

					<div>
						<input class="form-control" type="text" placeholder="Item title" id="item_title_value"/>
						<div class="error_msg" style="color: red; display: none;"></div>
					</div>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" id="save_item">Save item</button>
				</div>
		    </div>
		</div>
	</div>

	<div class="container">

		<div id="render_div" style="width: 50%; padding-top: 15px;">

			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#itemModal">Add item</button><br/>
			<br/>
			
			<ul class="list-group" id="list">
			</ul>

		</div>

	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>	
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"
			integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ=="
			crossorigin="anonymous"></script>
	<script src="script.js"></script>

	<style type="text/css">
		.glyphicon {
			cursor: pointer;
		}
	</style>

</body>
</html>