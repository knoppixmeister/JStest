if(typeof(Storage) !== "undefined") {
	if(localStorage.getItem("last_item_id") == null) {
		localStorage.setItem("last_item_id", 1);
	}
	if(localStorage.getItem("child_items_0") == null) {
		localStorage.setItem("child_items_0", '');//root element ID (parent category) = 0 always present
	}
}
else alert('NO STORAGE SUPPORT');

$(function() {
	var title = $('#item_title_value');

	render_items(0, 0);//start from root item w/ ID = 0, and level = 0

	function render_items(parent_item_id, level) {
		var child_items_str = localStorage.getItem("child_items_"+parent_item_id);

		if(child_items_str == null || child_items_str == '') return;

		var child_items = child_items_str.split(',');
		for(var i=0; i<child_items.length; i++) {
			var item_title = 	localStorage.getItem("item_"+child_items[i]) != null ?
								localStorage.getItem("item_"+child_items[i]) :
								'';
			var new_item = $('#list').append('<li class="list-group-item" data-id="'+child_items[i]+'" data-parent_id="'+parent_item_id+'"><span class="glyphicon glyphicon-plus"></span>&nbsp;'+item_title+'&nbsp;<a href="#" class="add_child_item">Add child</a>&nbsp;|&nbsp;<a href="#" class="edit_item">Edit</a>&nbsp;|&nbsp;<a href="#" class="delete_item">Delete</a></li>');
			add_delete_handler();
			add_edit_handler();
			add_child_item_handler();
		}
	}

	$('#save_item').on('click', function(event) {
		event.preventDefault();

		if(title.val() == '') {
			title.parent().css('border', '1px solid red');
			title.next('.error_msg').css('display', 'block').html('Plese provide item title');

			return;
		}
		else {
			title.parent().css('border', 'none');
			title.next('.error_msg').css('display', 'none').html('');
		}

		var last_item_id	=	localStorage.getItem("last_item_id");
		var last_id			=	parseInt(last_item_id);

		var new_item = $('#list').append('<li class="list-group-item" data-id="'+last_id+'" data-parent_id="0"><span class="glyphicon glyphicon-plus"></span>&nbsp;'+title.val()+'&nbsp;<a href="#" class="add_child_item">Add child</a>&nbsp;|&nbsp;<a href="#" class="edit_item">Edit</a>&nbsp;|&nbsp;<a href="#" class="delete_item">Delete</a></li>');
		add_delete_handler();
		add_edit_handler();
		add_child_item_handler();

		var data = localStorage.getItem("child_items_0");
		if(data == '') {
			data = last_id;
			localStorage.setItem("item_"+last_id, title.val());
		}
		else {
			data += ','+last_id;
			localStorage.setItem("item_"+last_id, title.val());
		}
		localStorage.setItem("child_items_0", data);

		localStorage.setItem("last_item_id", last_id+1);

		$('#itemModal').modal('hide');
	});

	function add_delete_handler() {
		$('#list .delete_item').off('click');

		$('#list .delete_item').on('click', function(event) {
			event.preventDefault();

			//if(confirm('Are you sure delete this item?')) $(this).parent().remove();

			var item_id_str = $(this).parent().data('id');
			var item_id = parseInt(item_id_str);

			var parent_item_id_str = $(this).parent().data('parent_id');
			var parent_item_id = parseInt(parent_item_id_str);

			
		});
	}

	function storage_remove_item(parent_id, item_id) {
		

		//localStorage.removeItem("item_"+item_id);
	}

	function storage_add_item(parent_id, new_item_title) {
		
	}

	function storage_edit_item(parent_id, item_id, new_title, new_parent_id) {
		
	}

	function add_edit_handler() {
		$('#list .edit_item').off('click');

		$('#list .edit_item').on('click', function(event) {
			event.preventDefault();

			$('#itemModal').modal('show');
		});
	}

	function add_child_item_handler() {
		$('#list .add_child_item').off('click');

		$('#list .add_child_item').on('click', function(event) {
			event.preventDefault();

			$('#itemModal').modal('show');
		});
	}

	$('#itemModal').on('hide.bs.modal', function(e) {
		title.val('');
		title.parent().css('border', 'none');
		title.next('.error_msg').css('display', 'none').html('');
	});
});
