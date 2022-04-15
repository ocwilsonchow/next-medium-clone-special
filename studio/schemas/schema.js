import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import user from "./user";
import account from "./account";
import comment from "./comment"
import chatroom from "./chatroom"
import chatMessage from "./chatMessage";
import inboxMessage from "./inboxMessage";
import verificationToken from "./verificationToken"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    author,
    category,
    blockContent,
    user,
    account,
    comment,
    chatroom,
    chatMessage,
    inboxMessage,
    verificationToken
  ]),
});
