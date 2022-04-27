-- CreateTable
CREATE TABLE "UserLikedMessage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,

    CONSTRAINT "UserLikedMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserLikedMessage_userId_messageId_key" ON "UserLikedMessage"("userId", "messageId");

-- AddForeignKey
ALTER TABLE "UserLikedMessage" ADD CONSTRAINT "UserLikedMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedMessage" ADD CONSTRAINT "UserLikedMessage_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
