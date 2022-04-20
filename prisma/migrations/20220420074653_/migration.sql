-- AlterTable
ALTER TABLE "ChatMessage" ADD COLUMN     "chatRoomId" TEXT;

-- AlterTable
ALTER TABLE "ChatRoom" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
