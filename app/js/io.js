/**
 * Created by kyawtun on 14/11/14.
 */



document.getElementById('load').onclick = function() {
  var fs = require('fs');
  var obj;
  fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) throw err;
    var json = JSON.parse(data);
    db.put('todo', json).done(function() {
      init();
    })
  });
};

