var _ =       require('underscore.deferred');


function getA(a) {
    var deferred = _.Deferred();
    console.log('a', a, a + 1);
    setTimeout(function() {
        deferred.resolve(a + 1);
    },100);
    return deferred;
}

function getB(a, c, b) {
    var deferred = _.Deferred();
    console.log('b', b, b + 3);
    setTimeout(function() {
        deferred.resolve(b + 3 - a + c);
    }, 200);
    return deferred;
}

function getC(c) {
    var deferred = _.Deferred();
    console.log('c', c, c + 5);
    setTimeout(function() {
        deferred.resolve(c + 5);
    }, 100);
    return deferred;
}



function name () {
var dfd = _.Deferred();
   dfd.then(null, getA)
       .then(function(b) {
           return getB(2, 5, b);
       })
       .then(getC)
       .then(function(v) {
           return 'res:' + v;
       })
       .done(function(d) {
           console.log(d); // return res: 13
       })
   ;

dfd.reject(1);
}

exports.name = name;