/*
    * Implement a set of dummy functions which can mimic the behaviour of the following functions:
    * 1. download --> This function should mimic downloading of some content from a url
    * 2. writeFile --> This function should mimic writing of some content to a file
    * 3. upload --> This function should mimic uploading the file to a server.
    * 
    * Now after you've implemented these functions, try to use them in a scenario where we first download a file, then write it to a disk and then upload it to a server.
*/



function download(url, callback) {
    console.log("Downloading from", url);
    setTimeout(() => {
        console.log("Download is done");
        let downloadedData = "Some Data";
        callback?.(downloadedData);
    }, 3000);
}

download("https://www.example.com", function handleDownload(data) {
    console.log("Data download is", data);
});

function writeFiles(data, fileName, callback) {
    console.log("Writing", data, "to file");
    setTimeout(() => {
        console.log("Writing to file", fileName, "is done");
        let status = "Success";
        callback?.(status);
    }, 2000);
}

function upload(fileName, url, callback) {
    console.log("Uploading file",fileName, "to", url);
    setTimeout(() => {
        console.log("Upload is done");
        let uploadStatus = "Success";
        callback?.(uploadStatus);
    }, 3000);
}

function process() {
    download("https://www.example.com", function handleDownload(data) {
        writeFiles(data, "file.txt", function handleWrite(status) {
            upload("file.txt", "https://www.example1.com", function handleUpload(uploadStatus) {
                console.log("All done");
            })
        })
    })
}

process();