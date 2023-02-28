exports.normalizeFile = function (url) {
  const file = url.trim().split("/").at(-1);
  const [name, extention] = file.split(".");
  return { name, extention };
};

exports.normalizeDir = function (path) {
  return path.trim().replace(/\\/gm, "/");
};
