import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import user from "./user";
import comment from "./comment";
import chatroom from "./chatroom";
import chatMessage from "./chatMessage";
import inboxMessage from "./inboxMessage";
import gallery from "./gallery";
import onlineUsers from "./onlineUser"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    author,
    category,
    blockContent,
    user,
    comment,
    chatroom,
    chatMessage,
    inboxMessage,
    gallery,
    onlineUsers
  ]),
});
