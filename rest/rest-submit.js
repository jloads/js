function restSubmit(modulename, method, data, response, error, success) {
    var url = '/origini-app/visitor/' + modulename + '/php/index.php';

    console.log('restSubmit');
    return;

    // var Newsletter = new Rest(url, '?', function (data) {
    //     console.error(data);
    // }, function (data) {
    //     console.table(data);
    // });
    var RestHandle = new Rest(url, '?', response, error, success);

    console.log(this);

    delete data.method;
    delete data.submit;

    console.log(method);

    RestHandle.byMethod(method, data);
    console.log(data);
}

// restSubmit('auth','GET',{'id': 1,' name':'tom'});
// restSubmit('auth','PUT',{'id': 1,' name':'tom'});
