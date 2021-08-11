// on 404, redirect if path matches any entry in redirects list

const tsv =
  "bWVsem9vbQlodHRwczovL3VjZGVudmVyLnpvb20udXMvai82NDIzMzUyNDE0P3B3ZD1UMFJDVkZFek9VWktaSEpHY2taSGNFeFBWRnBtZHowOQpqdWx6b29tCWh0dHBzOi8vdWNkZW52ZXIuem9vbS51cy9qLzI2NjI3NDUxODI/cHdkPVV6VTFWMFp4YlZaWVdHMTZhaTlIVDBKSU9EZFdaejA5Cm5pY29sZXpvb20JaHR0cHM6Ly91Y2RlbnZlci56b29tLnVzL3MvMjI5NzA2Nzc1OD9wd2Q9U25GeU1raEpXR1pYWlZCb1FXcDRVVUU1T1hneFFUMDk=";

const map = Object.fromEntries(
  window
    .atob(tsv)
    .split("\n")
    .map((line) => line.split(/\s/).filter((column) => column))
    .filter((line) => line)
);

const from = window.location.pathname.slice(1);
const to = map[from];

if (from && to) {
  console.log(`Redirecting from ${from} to ${to}`);
  window.location.href = to;
}
