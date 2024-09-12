function download(url) {
    return new Promise(function exec(res,rej) {
        console.log("Started downloading data from",url);
        setTimeout(function() {
            let data = "Some data from " + url;
            console.log("Downloaded data from",url);
            res(data);
        }, 3000);
    })
}

function writeFile(data, fileName) {
    return new Promise(function exec(res,rej) {
        console.log("Writing", data, "to file");
        setTimeout(() => {
            console.log("Writing to file", fileName, "is done");
            let status = "Success";
            res(status);
        }, 2000);
    })
}

function upload(fileName, url) {
    return new Promise(function exec(res,rej) {
        console.log("Uploading file",fileName, "to", url);
        setTimeout(() => {
            console.log("Upload is done");
            let uploadStatus = "Success";
            res(uploadStatus);
        }, 3000);
    })
}


function* exec() {
    console.log("Starting execution");

    const downloadedData = yield download("https://www.example.com");
    console.log("Data downloaded is", downloadedData);

    const fileResponse = yield writeFile(downloadedData, "example.txt");
    console.log("File write status", fileResponse);

    const uploadStatus = yield upload("example.txt", "https://www.example.com");
    console.log("Upload status", uploadStatus);

    // const d2 = yield download("https://www.example.com");
    // console.log("Data downloaded is", d2);

    // const f2 = yield writeFile(downloadedData, "example.txt");
    // console.log("File write status", f2);

    // const u2 = yield upload("example.txt", "https://www.example.com");
    // console.log("Upload status", u2);

    return uploadStatus;
}

const it = exec();

const ft = it.next();
console.log("ft is", ft);
ft.value.then(function doAfterReceiving(value) {
    console.log("Calling doAfterReceiving function", value);

    const future = it.next(value);
    if(future.done) return;
    future.value.then(doAfterReceiving);
})