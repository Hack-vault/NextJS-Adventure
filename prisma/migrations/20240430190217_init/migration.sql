-- CreateTable
CREATE TABLE "Post" (
    "id" INT8 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "body" STRING NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);