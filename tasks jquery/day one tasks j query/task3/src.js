$(document).ready(function () {
  $("#add-task").click(function () {
    var taskText = $("#task-input").val().trim();
    if (!taskText) {
      alert("Please enter a task");
      return;
    }
    if (taskText) {
      $("#task-list").append(`
        <div class="task">
          <input type="checkbox" class="task-checkbox">
          <span>${taskText}</span>
          <i class="fas fa-trash delete-btn"></i>
        </div>
      `);
      $("#task-input").val("");
    }
  });

  // $(document).on("click", ".delete-btn", function () {
  //   $(this).parent().remove();
  // });

  $(document).on("click", ".delete-btn", function () {
    // Check if the associated checkbox is checked
    if ($(this).siblings(".task-checkbox").is(":checked")) {
      if (confirm("Are you sure you want to delete this task?")) {
        $(this).parent().remove(); // Remove the task if checked
      }
    } else {
      alert("Please check the task before deleting it!");
    }
  });
});
