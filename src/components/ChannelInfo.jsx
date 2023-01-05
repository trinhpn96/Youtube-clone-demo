import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Youtube from "../api/youtube";

import React from "react";
const ChannelInfo = ({ id, title }) => {
  const {
    isLoading,
    error,
    data: url,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.channelThumbnail(id);
    },
  });

  return (
    <div className="flex my-4 mb-8 items-center">
      <img className="w-10 h-10 rounded-full" src={url} />
      <p className="text-lg font-medium ml-2">{title}</p>
    </div>
  );
};
export default ChannelInfo;
