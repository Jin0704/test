function fetchData(id) {
    // 模拟异步操作
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for ${id}`), 1000);
    });
}

function getData(ids) {
    let results = [];
    let promises = [];

    for (let i = 0; i < ids.length; i++) {
        promises.push(fetchData(ids[i]));
    }

    let tempResults = [];
    for (let i = 0; i < promises.length; i++) {
        promises[i].then(data => {
            tempResults[i] = data;

            if (tempResults.length === ids.length && !tempResults.includes(undefined)) {
                for (let j = 0; j < tempResults.length; j++) {
                    results.push(tempResults[j]);
                }
                console.log(results);
            }
        });
    }
}

const ids = [1, 2, 3, 4, 5];
getData(ids);