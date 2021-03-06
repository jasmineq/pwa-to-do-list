myApp.controllers = {
  menuPage: function (page) {
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/refresh"]'), function (element) {
      element.onclick = function () {
        location.reload();
      };
    });
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/new-todo"]'), function (element) {
      element.onclick = function () {
        document.querySelector('#myNavigator').pushPage('include/new_todo.html');
      };
    });
  },
  newTodoPage: function (page) {
    page.querySelector('#todo-date').innerHTML = getTime();
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/save-todo"]'), function (element) {
      element.onclick = function () {
        var description = page.querySelector('#todo-description').value;
        var createDate = page.querySelector('#todo-date').innerHTML;
        if (description && createDate) {
          var todo = {
            key : null,
            description : description,
            createDate : createDate,
            flag : true
          };
          myApp.services.todos.create(todo);
        }
      };
    });
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/save-todo-back"]'), function (element) {
      element.onclick = function () {
        document.querySelector('#myNavigator').popPage();
      };
    });
  }
};
