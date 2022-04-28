-- DropForeignKey
ALTER TABLE "UserLikedMessage" DROP CONSTRAINT "UserLikedMessage_messageId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedMessage" DROP CONSTRAINT "UserLikedMessage_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserLikedMessage" ADD CONSTRAINT "UserLikedMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedMessage" ADD CONSTRAINT "UserLikedMessage_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
