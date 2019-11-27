CREATE TABLE "Users"
(
    "_id" serial,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "order_id" VARCHAR(255) NOT NULL,
    CONSTRAINT "Users_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);



CREATE TABLE "Orders"
(
    "_id" serial,
    "product_id" integer,
    "user_id" integer NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Orders_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);



CREATE TABLE "Products"
(
    "_id" serial NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" integer NOT NULL,
    "quantity" integer NOT NULL,
    "imgUrl" VARCHAR(255) NOT NULL,
    CONSTRAINT "Products_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);



ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("order_id") REFERENCES "Orders"("_id");

ALTER TABLE "Orders" ADD CONSTRAINT "Orders_fk0" FOREIGN KEY ("product_id") REFERENCES "Products"("_id");
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_fk1" FOREIGN KEY ("user_id") REFERENCES "Users"("_id");

