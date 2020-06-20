// const download = (url, callback) => {
//   setTimeout(() => {
//     // script to download the picture here
//     console.log(`Downloading ${url} ...`);
//     // process the picture once it is completed
//     callback(url);
//   }, 3000);
// };

// let url = "https://www.javascripttutorial.net/pic.jpg";
// download(url, (picture) => {
//   console.log(`Processing ${picture}`);
// });

const download = (url, success, failure) => {
  setTimeout(() => {
    console.log(`downloading from ${url}...`);
    let error = url.length === 0 || !url;
    error ? failure(url) : success(url);
  }, 2000);
};

download(
  "",
  function (picture) {
    console.log(`processing the picture ${picture}`);
  },
  function (picture) {
    console.log("handling error..");
  }
);
