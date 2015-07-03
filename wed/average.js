function averageColon (numbers) {
    var results = 0;

    for (var i = 0; i < numbers.length; i++) {
        results += parseInt(numbers[i]);
    }

    results = results / numbers.length;

    return results;
}

function averageColonReduce (numbers) {
    var results = 0;

    results = numbers.reduce(function (pre, post) {
        return parseInt(pre) + parseInt(post);
    });

    results = results / numbers.length;

    return results;
}

function averageColonEach (numbers) {
    var results = 0;

    numbers.forEach(function (num) {
         results = results + parseInt(num);
    });

    results = results / numbers.length;

    return results;
}
