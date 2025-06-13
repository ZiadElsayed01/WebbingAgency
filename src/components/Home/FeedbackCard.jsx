import { Star } from "lucide-react";
import React from "react";

export default function FeedbackCard({ client }) {
  return (
    <>
      <div className="bg-white rounded-lg p-6 text-left h-full flex flex-col justify-between">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={client.image}
            alt={client.name}
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="text-lg font-semibold text-mainText">
              {client.name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>
        <p className="text-sm text-secondText line-clamp-2">
          {client.message.slice(0, 200)}
        </p>
      </div>
    </>
  );
}
