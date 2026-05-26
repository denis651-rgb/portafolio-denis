export const getYouTubeId = (url) => {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    if (parsedUrl.pathname.startsWith("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] || "";
    }

    if (parsedUrl.pathname.startsWith("/shorts/")) {
      return parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    }

    return parsedUrl.searchParams.get("v") || "";
  } catch {
    return "";
  }
};

export const getVideoEmbedUrl = (url) => {
  const youtubeId = getYouTubeId(url);

  if (youtubeId) {
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`;
  }

  return url;
};

export const getVideoWatchUrl = (url) => {
  const youtubeId = getYouTubeId(url);

  if (youtubeId) {
    return `https://www.youtube.com/watch?v=${youtubeId}`;
  }

  return url;
};

export const getVideoThumbnailUrl = (url) => {
  const youtubeId = getYouTubeId(url);

  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  return "";
};
