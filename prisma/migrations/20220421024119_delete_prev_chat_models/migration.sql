/*
  Warnings:

  - You are about to drop the column `chatMessageId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `chatRoomId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ChatMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_chatRoomId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_chatRoomId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "chatMessageId",
DROP COLUMN "chatRoomId";

-- DropTable
DROP TABLE "ChatMessage";

-- DropTable
DROP TABLE "ChatRoom";
