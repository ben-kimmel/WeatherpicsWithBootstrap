var rh = rh || {};
rh.mq = rh.mq || {};
rh.mq.editing = false;

rh.mq.enableButtons = function() {
	$("#toggle-edit").click(function() {
		if (rh.mq.editing) {
			rh.mq.editing = false;
			$(".edit-actions").addClass("hidden");
			$(this).html("Edit");
		} else {
			rh.mq.editing = true;
			$(".edit-actions").removeClass("hidden");
			$(this).html("Done");
		}
	});

	$("#insert-weatherpic").click(function() {
		$("#insert-weatherpic-modal .modal-title").html("Add a Weatherpic");
		$("#insert-weatherpic-modal button[type=submit]").html("Add Weatherquote");
		$("#insert-weatherpic-modal input[name=image_url]").val("");
		$("#insert-weatherpic-modal input[name=caption]").val("");
		$("#insert-weatherpic-modal input[name=entity_key]").val("").prop("disabled", true);
	});

	$(".edit-movie-quote").click(function() {
		$("#insert-weatherpic-modal .modal-title").html("Edit this Weatherpic");
		$("#insert-weatherpic-modal button[type=submit]").html("Edit Weatherpic");

		var quote = $(this).find(".quote").html().trim();
		var movie = $(this).find(".movie").html().trim();
		var entityKey = $(this).find(".entity-key").html().trim();

		$("#insert-weatherpic-modal input[name=image_url]").val(quote);
		$("#insert-weatherpic-modal input[name=caption]").val(movie);
		$("#insert-weatherpic-modal input[name=entity_key]").val(entityKey).prop("disabled", false);
	});
	
	$(".delete-movie-quote").click(function() {
		entityKey = $(this).find(".entity-key").html().trim();
		$("#delete-quote-modal input[name=entity_key]").val(entityKey);
	});
};

rh.mq.attachEventHandlers = function() {
	$('#insert-weatherpic-modal').on('shown.bs.modal', function() {
		$("input[name='image_url']").focus();
	});
};

$(document).ready(function() {
	rh.mq.enableButtons();
	rh.mq.attachEventHandlers();
});
