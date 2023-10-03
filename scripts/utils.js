const cutItemTitle = (title, length) => {
  if (title.length <= length) {
    return title;
  }

  return window.matchMedia("(max-width: 1024px)").matches
    ? title.substr(0, length) + "..."
    : title;
};
