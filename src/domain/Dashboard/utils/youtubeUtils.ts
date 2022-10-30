export const youTubeIdFromLink = (url: string) => {
  const youtubeIdRegex =
    /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/shorts\/)([^\s&\?\/\#]+)/;
  const match = url.match(youtubeIdRegex);
  return match ? match[1] : null;
};

export const getYoutubeThumbnail = (url: string) => {
  const youtubeId = youTubeIdFromLink(url);

  return youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : null;
};
